import { Grid, List, SlidersHorizontal } from 'lucide-react';
import { Button } from './ui/button';

interface ProductToolbarProps {
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  productCount: number;
  onToggleFilters?: () => void;
}

const ProductToolbar = ({
  viewMode,
  setViewMode,
  sortBy,
  setSortBy,
  productCount,
  onToggleFilters
}: ProductToolbarProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          {onToggleFilters && (
            <button
              onClick={onToggleFilters}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              <SlidersHorizontal size={20} />
              Filters
            </button>
          )}
          <p className="text-gray-600">
            Showing <span className="font-semibold">{productCount}</span> products
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest</option>
          </select>

          {/* View Toggle */}
          <div className="flex border rounded-lg overflow-hidden">
            <Button
              variant="normal"
              size="normal"
              onClick={() => setViewMode('grid')}
              className={`p-2 ${
                viewMode === 'grid'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Grid size={20} />
            </Button>
            <Button
              variant="normal"
              size="normal"
              onClick={() => setViewMode('list')}
              className={`p-2 ${
                viewMode === 'list'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <List size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductToolbar;
