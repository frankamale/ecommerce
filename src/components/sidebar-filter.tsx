import { Star, Filter } from 'lucide-react';

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
  subCategories
}: SidebarFilterProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-6">
        <Filter size={20} /> Filters
      </h2>

      {/* Sub Categories */}
      {subCategories && subCategories.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Sub Categories</h3>
          <div className="space-y-2">
            <button
              onClick={() => setSelectedSubCategory?.('all')}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                selectedSubCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              All
            </button>
            {subCategories.map((subCat) => (
              <button
                key={subCat.id}
                onClick={() => setSelectedSubCategory?.(subCat.id)}
                className={`w-full text-left px-3 py-2 rounded-lg transition ${
                  selectedSubCategory === subCat.id
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{subCat.name}</span>
                  <span className="text-sm">({subCat.count})</span>
                </div>
              </button>
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

      {/* Rating Filter */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Rating</h3>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition flex items-center gap-2"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">& Up</span>
            </button>
          ))}
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

      <button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition">
        Reset Filters
      </button>
    </div>
  );
};

export default SidebarFilter;
