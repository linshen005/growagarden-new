import { z } from "zod";

export const CropSchema = z.object({
  name: z.string(),
  basePrice: z.number(),
  baseWeight: z.number(),
  seedPrice: z.number(),
  rarity: z.string(),
});
export type Crop = z.infer<typeof CropSchema>;

export async function getCrops(): Promise<Crop[]> {
  const res = await fetch(
    "https://raw.githubusercontent.com/lenshen005/growagarden-new/main/data/crops.json",
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch crops");
  const data = await res.json();
  return CropSchema.array().parse(data);
} 