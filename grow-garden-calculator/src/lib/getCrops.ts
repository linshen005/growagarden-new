import { CropSchema, Crop } from "@/types/crop";

export async function getCrops(): Promise<Crop[]> {
  const res = await fetch(
    'https://raw.githubusercontent.com/linshen005/growagarden-new/main/data/crops.json',
    { next: { revalidate: 86400 } }  // ISR 每 24 h
  );
  if (!res.ok) throw new Error('Failed to fetch crops');
  const data = await res.json();
  return CropSchema.array().parse(data);
} 