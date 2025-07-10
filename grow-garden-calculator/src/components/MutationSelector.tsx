import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Mutation } from "@/data/mutations";

interface MutationSelectorProps {
  mutations: Mutation[];
  selectedMutations: Mutation[];
  onToggleMutation: (mutation: Mutation) => void;
  allowMultiple: boolean;
}

export default function MutationSelector({
  mutations,
  selectedMutations,
  onToggleMutation,
  allowMultiple
}: MutationSelectorProps) {
  return (
    <div className="space-y-2">
      {mutations.map((mutation) => {
        const isSelected = selectedMutations.some(m => m.id === mutation.id);

        return (
          <Button
            key={mutation.id}
            variant={isSelected ? "default" : "outline"}
            className={`
              w-full justify-between text-left
              ${isSelected
                ? 'bg-blue-600 hover:bg-blue-700 border-blue-500'
                : 'bg-gray-700 hover:bg-gray-600 border-gray-600'
              }
            `}
            onClick={() => onToggleMutation(mutation)}
          >
            <span>{mutation.name}</span>
            <Badge variant="secondary" className="ml-2">
              ×{mutation.multiplier}
            </Badge>
          </Button>
        );
      })}
    </div>
  );
}
