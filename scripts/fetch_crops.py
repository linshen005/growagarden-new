#!/usr/bin/env python3
"""
日常从 Grow A Garden Fandom Wiki 抓取作物数据，输出 data/crops.json
用法：python scripts/fetch_crops.py
"""
import requests, json, datetime, pathlib, time
import mwparserfromhell as mw

BASE = "https://growagarden.fandom.com/api.php"
HEADERS = {"User-Agent": "GAGFetcher/1.0 (+github.com/<your-github>)"}
OUT_DIR = pathlib.Path(__file__).resolve().parent.parent / "data"
OUT_DIR.mkdir(exist_ok=True)

def list_pages():
    r = requests.get(BASE, params={
        "action":"query","list":"categorymembers",
        "cmtitle":"Category:Crops","cmlimit":"500","format":"json"
    }, headers=HEADERS, timeout=20)
    r.raise_for_status()
    return [x["title"] for x in r.json()["query"]["categorymembers"]]

def parse_page(title):
    r = requests.get(BASE, params={
        "action":"parse","page":title,
        "prop":"wikitext","format":"json"
    }, headers=HEADERS, timeout=20)
    r.raise_for_status()
    code = mw.parse(r.json()["parse"]["wikitext"]["*"])
    tpl = next(t for t in code.filter_templates()
               if t.name.lower().startswith("infobox"))
    g = lambda k: tpl.get(k).value.strip() if tpl.has(k) else ""
    return {
        "name": title,
        "basePrice": float(g("Base Value") or 0),
        "baseWeight": float(g("Base Weight").replace("kg","") or 0),
        "seedPrice": float(g("Seed Price") or 0),
        "rarity": g("Tier"),
    }

def main():
    crops = [parse_page(p) for p in list_pages()]
    crops.sort(key=lambda x: x["name"])
    today = datetime.date.today().isoformat()
    (OUT_DIR / "history").mkdir(exist_ok=True)
    (OUT_DIR / f"history/{today}.json").write_text(
        json.dumps(crops, ensure_ascii=False, indent=2))
    latest = OUT_DIR / "crops.json"
    if latest.exists() and json.loads(latest.read_text()) == crops:
        print("No change")
        return
    latest.write_text(json.dumps(crops, ensure_ascii=False, indent=2))
    print("Updated crops.json with", len(crops), "records")

if __name__ == "__main__":
    main() 