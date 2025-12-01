import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import ProductCard from "../components/product-card";
import ProductToolbar from "../components/product-toolbar";
import SidebarFilter from "../components/sidebar-filter";
import {
  categories as allCategories,
  products as allProducts,
} from "../data/products";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  inStock: boolean;
  isNew?: boolean;
  discount?: number;
}

const Products = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [showFilters, setShowFilters] = useState(false);

  // Map products from data file to ProductCard format
  const products: Product[] = allProducts.map((p) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    originalPrice: p.originalPrice,
    rating: p.rating,
    reviews: p.reviews,
    image: p.images[0],
    category: p.category,
    inStock: p.inStock,
    isNew: p.isNew,
    discount: p.discount,
  }));

  // Get unique categories with product counts
  const categories = allCategories.map((cat) => ({
    id: cat.slug,
    name: cat.name,
    count: products.filter((p) => p.category === cat.slug).length,
  }));

  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== "all" && product.category !== selectedCategory)
      return false;
    if (product.price < priceRange[0] || product.price > priceRange[1])
      return false;
    return true;
  });

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Products</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside
            className={`lg:w-64 ${showFilters ? "block" : "hidden lg:block"}`}
          >
            <SidebarFilter
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedSubCategory={selectedCategory}
              setSelectedSubCategory={setSelectedCategory}
              subCategories={categories}
            />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <ProductToolbar
              viewMode={viewMode}
              setViewMode={setViewMode}
              sortBy={sortBy}
              setSortBy={setSortBy}
              productCount={filteredProducts.length}
              onToggleFilters={() => setShowFilters(!showFilters)}
            />

            {/* Products Grid */}
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "grid grid-cols-1 lg:grid-cols-2 gap-4"
              }
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex gap-2">
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                  1
                </button>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                  3
                </button>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
