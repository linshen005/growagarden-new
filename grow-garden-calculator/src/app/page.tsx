"use client";

import { useState, useMemo, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getCrops } from "@/lib/getCrops";
import { mutations, getMutationsByType, type Mutation } from "@/data/mutations";
import CropSelector from "@/components/CropSelector";
import MutationSelector from "@/components/MutationSelector";
import CalculatorResults from "@/components/CalculatorResults";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// 定义 Crop 类型
interface Crop {
  id: string;
  name: string;
  image: string;
  baseValue?: number;
  basePrice?: number;
}

export default function Home() {
  const [crops, setCrops] = useState<Crop[]>([]);
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);
  const [selectedMutations, setSelectedMutations] = useState<Mutation[]>([]);
  const [weight, setWeight] = useState<number>(2.85);
  const [quantity, setQuantity] = useState<number>(1);
  const [friendBoost, setFriendBoost] = useState<number>(0);
  const [maxMutation, setMaxMutation] = useState<boolean>(false);
  const [cropSearch, setCropSearch] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    getCrops()
      .then(data => setCrops(data))
      .catch(() => setError("作物数据加载失败"))
      .finally(() => setLoading(false));
  }, []);

  const filteredCrops = useMemo(() => {
    if (!cropSearch) return crops;
    return crops.filter(crop =>
      crop.name.toLowerCase().includes(cropSearch.toLowerCase())
    );
  }, [cropSearch, crops]);

  const calculateValue = useMemo(() => {
    if (!selectedCrop) return 0;
    const baseValue = selectedCrop.baseValue ?? selectedCrop.basePrice ?? 0;
    let totalMultiplier = 1;
    selectedMutations.forEach(mutation => {
      totalMultiplier *= mutation.multiplier;
    });
    if (friendBoost > 0) {
      totalMultiplier *= (1 + friendBoost / 100);
    }
    if (maxMutation) {
      totalMultiplier *= 1.5;
    }
    return Math.round(baseValue * weight * quantity * totalMultiplier);
  }, [selectedCrop, selectedMutations, weight, quantity, friendBoost, maxMutation]);

  const resetCalculator = () => {
    setSelectedCrop(null);
    setSelectedMutations([]);
    setWeight(2.85);
    setQuantity(1);
    setFriendBoost(0);
    setMaxMutation(false);
  };

  if (loading) return <div className="text-center py-10">作物数据加载中...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <Navigation />
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">
            Grow A Garden Calculator
          </h1>
          <p className="text-gray-400 text-center mt-2">
            Calculate the value of your crops in Roblox Grow A Garden.
          </p>
        </div>
      </header>
      <div className="container mx-auto p-4 space-y-4">
        {/* Crop Selection */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-white text-lg">Select Crop</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              <Input
                placeholder="Search crops by name..."
                value={cropSearch}
                onChange={(e) => setCropSearch(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
              <CropSelector
                crops={filteredCrops}
                selectedCrop={selectedCrop}
                onSelectCrop={setSelectedCrop}
              />
            </div>
          </CardContent>
        </Card>
        {/* Calculator Inputs - 移到突变前面，让用户更快看到结果 */}
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="pt-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">Weight (kg)</label>
                <Input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  step="0.01"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Quantity (pcs)</label>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Friend Boost (%)</label>
                <div className="flex items-center gap-2">
                  <Input
                    type="range"
                    min="0"
                    max="100"
                    value={friendBoost}
                    onChange={(e) => setFriendBoost(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-sm w-12">{friendBoost}%</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Max Mutation</label>
                <Button
                  variant={maxMutation ? "default" : "outline"}
                  onClick={() => setMaxMutation(!maxMutation)}
                  className="w-full h-9"
                >
                  {maxMutation ? "On" : "Off"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results - 提前显示 */}
        <CalculatorResults
          selectedCrop={selectedCrop}
          selectedMutations={selectedMutations}
          weight={weight}
          quantity={quantity}
          totalValue={calculateValue}
        />

        {/* Mutations - 移到后面，可折叠 */}
        <details className="group">
          <summary className="cursor-pointer bg-gray-800 border border-gray-700 rounded-lg p-4 hover:bg-gray-750">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">
                Mutations ({selectedMutations.length} selected)
              </h2>
              <span className="text-gray-400 group-open:rotate-180 transition-transform">
                ▼
              </span>
            </div>
          </summary>

          <div className="mt-2 grid md:grid-cols-3 gap-4">
            {/* Growth Mutations */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-white flex items-center gap-2 text-base">
                  🌱 Growth Mutations
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <MutationSelector
                  mutations={getMutationsByType('growth')}
                  selectedMutations={selectedMutations}
                  onToggleMutation={(mutation) => {
                    setSelectedMutations(prev => {
                      const isSelected = prev.some(m => m.id === mutation.id);
                      if (isSelected) {
                        return prev.filter(m => m.id !== mutation.id);
                      } else {
                        // For growth mutations, only allow one at a time
                        const filtered = prev.filter(m => m.type !== 'growth');
                        return [...filtered, mutation];
                      }
                    });
                  }}
                  allowMultiple={false}
                />
              </CardContent>
            </Card>

            {/* Temperature Mutations */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-white flex items-center gap-2 text-base">
                  ❄️ Temperature Mutations
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <MutationSelector
                  mutations={getMutationsByType('temperature')}
                  selectedMutations={selectedMutations}
                  onToggleMutation={(mutation) => {
                    setSelectedMutations(prev => {
                      const isSelected = prev.some(m => m.id === mutation.id);
                      if (isSelected) {
                        return prev.filter(m => m.id !== mutation.id);
                      } else {
                        return [...prev, mutation];
                      }
                    });
                  }}
                  allowMultiple={true}
                />
              </CardContent>
            </Card>

            {/* Environmental Mutations */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-white flex items-center gap-2 text-base">
                  🌍 Environmental Mutations
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <Input
                    placeholder="Search mutations..."
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <div className="max-h-48 overflow-y-auto">
                    <MutationSelector
                      mutations={getMutationsByType('environmental')}
                      selectedMutations={selectedMutations}
                      onToggleMutation={(mutation) => {
                        setSelectedMutations(prev => {
                          const isSelected = prev.some(m => m.id === mutation.id);
                          if (isSelected) {
                            return prev.filter(m => m.id !== mutation.id);
                          } else {
                            return [...prev, mutation];
                          }
                        });
                      }}
                      allowMultiple={true}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </details>

        {/* Reset Button */}
        <div className="flex justify-center pt-2">
          <Button onClick={resetCalculator} variant="outline" className="px-8">
            Reset Calculator
          </Button>
        </div>

        {/* Information Sections */}
        <div className="space-y-4 mt-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl">What is Grow A Garden</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-300 text-sm">
              <p>
                <strong>Grow A Garden</strong> is a wildly popular farming simulation game on Roblox, where players plant seeds, grow crops, and harvest fruits to earn Sheckles, the in-game currency. With over 5 million concurrent players at its peak, this addictive game lets you expand your garden, unlock rare mutations like Shocked or Celestial, and trade items with others.
              </p>
              <p>
                In <em>Grow A Garden</em>, gameplay revolves around planting seeds from Sam's Seed Shop, nurturing crops with gear like sprinklers, and leveraging weather events (e.g., Blood Moon) to boost mutation chances. Mutations can multiply crop values by up to 150x, making them key to maximizing profits.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl">About Grow A Garden Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-300 text-sm">
              <p>
                The <strong>Grow A Garden Calculator</strong> is your ultimate tool for mastering <em>Grow A Garden</em> on Roblox. This free, user-friendly calculator helps you evaluate your inventory, analyze trades, and optimize farming profits. Select your crops to calculate their total fruit value, factoring in mutations like Celestial (120x value multiplier) or event-based boosts.
              </p>
              <p>
                Our calculator offers <strong>inventory valuation</strong> to track your wealth, <strong>trade analysis</strong> to determine if trades are a win, fair, or loss (WFL), and <strong>profit optimization</strong> to suggest the best crops and gear for maximum Sheckles.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl">About Grow A Garden Mutation Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-300 text-sm">
              <p>
                The <strong>Grow A Garden Mutation Calculator</strong> is a practical tool designed for <em>Grow A Garden</em> players on Roblox to maximize their farming profits. This free calculator lets you compute the value of your crops by factoring in mutations like Shocked (100x multiplier), Celestial (120x), or Rainbow (50x).
              </p>
              <p>
                Whether you're aiming for high-value stacks like Rainbow + Shocked + Frozen (up to 5,450x) or planning crops for events like Blood Moon, our <strong>Grow A Garden Mutation Calculator</strong> simplifies complex mutation math. It respects game rules, like only one of Gold or Rainbow mutations can be applied to a crop.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
