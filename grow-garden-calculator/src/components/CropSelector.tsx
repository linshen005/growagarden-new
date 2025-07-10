import { Badge } from "@/components/ui/badge";
import { type Crop } from "@/data/crops";
import Image from "next/image";

interface CropSelectorProps {
  crops: Crop[];
  selectedCrop: Crop | null;
  onSelectCrop: (crop: Crop) => void;
}

export default function CropSelector({ crops, selectedCrop, onSelectCrop }: CropSelectorProps) {
  return (
    <div className="w-full">
      {/* 紧凑的滚动网格 */}
      <div className="h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 pr-2">
        <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
          {crops.map((crop) => (
            <button
              key={crop.id}
              onClick={() => onSelectCrop(crop)}
              className={`
                flex flex-col items-center p-2 rounded-lg border transition-all hover:scale-105 aspect-square
                ${selectedCrop?.id === crop.id
                  ? 'border-blue-400 bg-blue-900/40 shadow-md'
                  : 'border-gray-600 bg-gray-700/80 hover:border-gray-500 hover:bg-gray-600/80'
                }
              `}
              title={`${crop.name} - ${crop.baseValue} Sheckles`}
            >
              <Image
                src={crop.image}
                alt={crop.name}
                width={28}
                height={28}
                className="rounded mb-1"
              />
              <span className="text-xs text-gray-300 text-center leading-tight line-clamp-2 px-1">
                {crop.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 选中的作物信息 */}
      {selectedCrop && (
        <div className="mt-3 p-3 bg-gray-750 rounded-lg border border-gray-600">
          <div className="flex items-center gap-3">
            <Image
              src={selectedCrop.image}
              alt={selectedCrop.name}
              width={40}
              height={40}
              className="rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-white">{selectedCrop.name}</h3>
              <p className="text-sm text-gray-400">
                Base Value: <span className="text-yellow-400">{selectedCrop.baseValue} Sheckles</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 滚动提示 */}
      <div className="text-center mt-2">
        <span className="text-xs text-gray-500">
          {crops.length} 种作物可选 • 滚动查看更多
        </span>
      </div>
    </div>
  );
}
