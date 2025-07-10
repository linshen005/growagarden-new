"""
日常从 Grow A Garden Fandom Wiki 抓取作物数据，输出 data/crops.json
用法：python scripts/fetch_crops.py
"""

import requests
import mwparserfromhell as mw
import json
import re
import os

BASE = "https://growagarden.fandom.com/api.php"
HEADERS = {"User-Agent": "GrowAGardenBot/1.0 (+linshen005)"}

def get_all_titles():
    titles = []
    a = 0
    while True:
        r = requests.get(BASE, params={
            "action": "query",
            "list": "categorymembers",
            "cmtitle": "Category:Crops",
            "cmlimit": "500",
            "cmcontinue": a if a else None,
            "format": "json"
        }, headers=HEADERS, timeout=20)
        r.raise_for_status()
        data = r.json()
        titles.extend([p["title"] for p in data["query"]["categorymembers"]])
        if "continue" in data:
            a = data["continue"]["cmcontinue"]
        else:
            break
    return titles

def parse_page(title):
    r = requests.get(BASE, params={
        "action": "parse", "page": title,
        "prop": "wikitext", "format": "json"
    }, headers=HEADERS, timeout=20)
    r.raise_for_status()
    code = mw.parse(r.json()["parse"]["wikitext"]["*"])
    try:
        tpl = next(
            t for t in code.filter_templates()
            if "crop" in t.name.lower()
        )
        print(f"✅ 正在解析: {title} → {tpl.name}")
    except StopIteration:
        print(f"❌ 没找到 crop: {title}")
        return None

    def get_num(key, fallback_keys=None):
        if tpl.has(key):
            val = tpl.get(key).value.strip()
        elif fallback_keys:
            for k in fallback_keys:
                if tpl.has(k):
                    val = tpl.get(k).value.strip()
                    break
            else:
                val = ""
        else:
            val = ""
        val = val.replace(",", "")
        matches = re.findall(r"\d+\.\d+|\d+", val)
        print(f"  行解析: {val} => {matches}")
        if matches:
            try:
                return float(matches[0])
            except Exception:
                return 0
        return 0

    def get_str(key, fallback_keys=None):
        if tpl.has(key):
            val = tpl.get(key).value.strip()
        elif fallback_keys:
            for k in fallback_keys:
                if tpl.has(k):
                    val = tpl.get(k).value.strip()
                    break
            else:
                val = ""
        else:
            val = ""
        return val

    def extract_seed_price(text: str) -> float:
        import re, math
        m = re.search(r"\{\{Sheckle\|([\d,]+)", text)
        if not m:
            m = re.search(r"\{\{Robux\|([\d,]+)", text)
        return float(m.group(1).replace(",", "")) if m else 0.0

    base_price = get_num("Base Value", ["BaseValue", "Value", "base_value", "price_floor_value"])
    base_weight = get_num("Base Weight", ["BaseWeight", "Weight", "base_weight", "price_floor_weight"])
    seed_price = 0.0
    if tpl.has("seed_price"):
        seed_price = extract_seed_price(tpl.get("seed_price").value.strip())
    rarity = get_str("Tier", ["tier", "Rarity", "Type", "type"])

    print(f" → basePrice: {base_price}, baseWeight: {base_weight}, seedPrice: {seed_price}, rarity: {rarity}")

    if base_price == 0 or base_weight == 0 or not rarity:
        print(f"⚠️  跳过: {title}")
        return None

    return {
        "name": title,
        "basePrice": base_price,
        "baseWeight": base_weight,
        "seedPrice": seed_price,
        "rarity": rarity
    }

def main():
    titles = get_all_titles()
    print(f"共找到 {len(titles)} 个作物")
    crops = []
    for t in titles:
        data = parse_page(t)
        if data:
            crops.append(data)
    os.makedirs("data", exist_ok=True)
    with open("data/crops.json", "w", encoding="utf-8") as f:
        json.dump(crops, f, ensure_ascii=False, indent=2)
    print(f"✅ 已写入 crops.json，共 {len(crops)} 条")

if __name__ == "__main__":
    main()