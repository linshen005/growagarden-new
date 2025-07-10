export interface Mutation {
  id: string;
  name: string;
  multiplier: number;
  type: 'growth' | 'temperature' | 'environmental';
  category: string;
}

export const mutations: Mutation[] = [
  // Growth Mutations
  { id: "golden", name: "Golden", multiplier: 20, type: "growth", category: "Growth Mutations" },
  { id: "rainbow", name: "Rainbow", multiplier: 50, type: "growth", category: "Growth Mutations" },

  // Temperature Mutations
  { id: "wet", name: "Wet", multiplier: 2, type: "temperature", category: "Temperature Mutations" },
  { id: "chilled", name: "Chilled", multiplier: 2, type: "temperature", category: "Temperature Mutations" },
  { id: "drenched", name: "Drenched", multiplier: 5, type: "temperature", category: "Temperature Mutations" },
  { id: "frozen", name: "Frozen", multiplier: 10, type: "temperature", category: "Temperature Mutations" },

  // Environmental Mutations
  { id: "choc", name: "Choc", multiplier: 2, type: "environmental", category: "Environmental Mutations" },
  { id: "moonlit", name: "Moonlit", multiplier: 2, type: "environmental", category: "Environmental Mutations" },
  { id: "windstruck", name: "Windstruck", multiplier: 2, type: "environmental", category: "Environmental Mutations" },
  { id: "pollinated", name: "Pollinated", multiplier: 3, type: "environmental", category: "Environmental Mutations" },
  { id: "sandy", name: "Sandy", multiplier: 3, type: "environmental", category: "Environmental Mutations" },
  { id: "clay", name: "Clay", multiplier: 3, type: "environmental", category: "Environmental Mutations" },
  { id: "bloodlit", name: "Bloodlit", multiplier: 4, type: "environmental", category: "Environmental Mutations" },
  { id: "burnt", name: "Burnt", multiplier: 4, type: "environmental", category: "Environmental Mutations" },
  { id: "verdant", name: "Verdant", multiplier: 4, type: "environmental", category: "Environmental Mutations" },
  { id: "wiltproof", name: "Wiltproof", multiplier: 4, type: "environmental", category: "Environmental Mutations" },
  { id: "plasma", name: "Plasma", multiplier: 5, type: "environmental", category: "Environmental Mutations" },
  { id: "honeyglazed", name: "HoneyGlazed", multiplier: 5, type: "environmental", category: "Environmental Mutations" },
  { id: "heavenly", name: "Heavenly", multiplier: 5, type: "environmental", category: "Environmental Mutations" },
  { id: "twisted", name: "Twisted", multiplier: 5, type: "environmental", category: "Environmental Mutations" },
  { id: "cloudtouched", name: "Cloudtouched", multiplier: 5, type: "environmental", category: "Environmental Mutations" },
  { id: "fried", name: "Fried", multiplier: 8, type: "environmental", category: "Environmental Mutations" },
  { id: "cooked", name: "Cooked", multiplier: 10, type: "environmental", category: "Environmental Mutations" },
  { id: "amber", name: "Amber", multiplier: 10, type: "environmental", category: "Environmental Mutations" },
  { id: "oldamber", name: "OldAmber", multiplier: 20, type: "environmental", category: "Environmental Mutations" },
  { id: "zombified", name: "Zombified", multiplier: 25, type: "environmental", category: "Environmental Mutations" },
  { id: "molten", name: "Molten", multiplier: 25, type: "environmental", category: "Environmental Mutations" },
  { id: "ceramic", name: "Ceramic", multiplier: 30, type: "environmental", category: "Environmental Mutations" },
  { id: "ancientamber", name: "AncientAmber", multiplier: 50, type: "environmental", category: "Environmental Mutations" },
  { id: "sundried", name: "Sundried", multiplier: 85, type: "environmental", category: "Environmental Mutations" },
  { id: "aurora", name: "Aurora", multiplier: 90, type: "environmental", category: "Environmental Mutations" },
  { id: "shocked", name: "Shocked", multiplier: 100, type: "environmental", category: "Environmental Mutations" },
  { id: "paradisal", name: "Paradisal", multiplier: 100, type: "environmental", category: "Environmental Mutations" },
  { id: "alienlike", name: "Alienlike", multiplier: 100, type: "environmental", category: "Environmental Mutations" },
  { id: "celestial", name: "Celestial", multiplier: 120, type: "environmental", category: "Environmental Mutations" },
  { id: "galactic", name: "Galactic", multiplier: 120, type: "environmental", category: "Environmental Mutations" },
  { id: "disco", name: "Disco", multiplier: 125, type: "environmental", category: "Environmental Mutations" },
  { id: "meteoric", name: "Meteoric", multiplier: 125, type: "environmental", category: "Environmental Mutations" },
  { id: "voidtouched", name: "Voidtouched", multiplier: 135, type: "environmental", category: "Environmental Mutations" },
  { id: "dawnbound", name: "Dawnbound", multiplier: 150, type: "environmental", category: "Environmental Mutations" }
];

export const getMutationsByType = (type: 'growth' | 'temperature' | 'environmental') => {
  return mutations.filter(mutation => mutation.type === type);
};

export const getMutationById = (id: string) => {
  return mutations.find(mutation => mutation.id === id);
};
