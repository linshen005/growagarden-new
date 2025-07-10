import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Crop } from "@/data/crops";
import { type Mutation } from "@/data/mutations";
import { useMemo } from "react";

interface CalculatorResultsProps {
  selectedCrop: Crop | null;
  selectedMutations: Mutation[];
  weight: number;
  quantity: number;
  totalValue: number;
}

export default function CalculatorResults({
  selectedCrop,
  selectedMutations,
  weight,
  quantity,
  totalValue
}: CalculatorResultsProps) {
  const totalMultiplier = useMemo(() => {
    return selectedMutations.reduce((acc, mutation) => acc * mutation.multiplier, 1);
  }, [selectedMutations]);

  if (!selectedCrop) {
    return null;
  }

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          💰 Total Value
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center space-y-4">
          <div className="text-6xl font-bold text-yellow-400">
            ⚡{totalValue.toLocaleString()}
          </div>

          <div className="text-lg text-gray-300">
            Total Multiplier: <span className="text-yellow-400">×{totalMultiplier}</span>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-white">Valuation Details</h3>
            <p className="text-gray-300">
              <span className="text-blue-400">{selectedCrop.name}</span> weighing{' '}
              <span className="text-green-400">{weight} kg</span>, worth{' '}
              <span className="text-yellow-400">{totalValue.toLocaleString()} Sheckles</span>
            </p>
          </div>

          {selectedMutations.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-400">Applied Mutations:</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {selectedMutations.map((mutation) => (
                  <Badge key={mutation.id} variant="secondary" className="text-xs">
                    {mutation.name} (×{mutation.multiplier})
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2 justify-center pt-4">
            <Button variant="outline" size="sm">
              Win Fair Lose WFL Calculator
            </Button>
            <Button variant="outline" size="sm">
              Value To Weight
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
