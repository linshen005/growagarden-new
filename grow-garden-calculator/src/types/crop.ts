import { z } from 'zod';

export const CropSchema = z.object({
  name: z.string(),
  basePrice: z.number(),
  baseWeight: z.number(),
  seedPrice: z.number(),
  rarity: z.string(),
});
export type Crop = z.infer<typeof CropSchema>; 