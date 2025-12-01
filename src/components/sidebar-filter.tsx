import { Filter } from "lucide-react";
import { Button } from "./ui/button";

interface SidebarFilterProps {
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  selectedSubCategory?: string;
  setSelectedSubCategory?: (category: string) => void;
  subCategories?: { id: string; name: string; count: number }[];
}

const SidebarFilter = ({
  priceRange,
  setPriceRange,
  selectedSubCategory,
  setSelectedSubCategory,
  subCategories,
}: SidebarFilterProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md py-6 px-3 sticky top-24">
      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-6">
        <Filter size={20} /> Filters
      </h2>

      {/* Sub Categories */}
      {subCategories && subCategories.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Sub Categories</h3>
          <div className="space-y-2">
            <Button
              variant={"normal"}
              onClick={() => setSelectedSubCategory?.("all")}
              className={`w-full block text-left px-3 py-2 rounded-lg transition ${
                selectedSubCategory === "all"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              All
            </Button>
            {subCategories.map((subCat) => (
              <Button
                variant={"normal"}
                key={subCat.id}
                onClick={() => setSelectedSubCategory?.(subCat.id)}
                className={`w-full block text-left px-3 py-2 rounded-lg transition ${
                  selectedSubCategory === subCat.id
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <div className="flex gap-1 items-center">
                  <span>{subCat.name}</span>
                  <span className="text-sm">({subCat.count})</span>
                </div>
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="2000000"
            step="50000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>UGX 0</span>
            <span>UGX {priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Availability */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Availability</h3>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4" />
          <span className="text-gray-700">In Stock Only</span>
        </label>
      </div>

      <Button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition">
        Reset Filters
      </Button>
    </div>
  );
};

export default SidebarFilter;
