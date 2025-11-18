import { Link } from 'react-router-dom';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import CategoryCard from '../components/category-card';
import ProductCard from '../components/product-card';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts, categories as allCategories, products as allProducts } from '../data/products';

const Categories = () => {
  const categories = allCategories.map(cat => ({
    name: cat.name,
    image: cat.image,
    link: `/categories/${cat.slug}`,
    productCount: allProducts.filter(p => p.category === cat.slug).length,
    description: cat.description
  }));

  const featuredProducts = getFeaturedProducts().slice(0, 4).map(p => ({
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
    discount: p.discount
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      {/* Breadcrumb */}
      <div className="bg-white border-b px-4 md:px-10 lg:px-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Categories</span>
          </div>
        </div>
      </div>

   
      {/* Categories Grid */}
      <div className="container mx-auto  py-12 px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              name={category.name}
              image={category.image}
              link={category.link}
              productCount={category.productCount}
              description={category.description}
            />
          ))}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="bg-white py-12 px-4 md:px-10 lg:px-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
              <p className="text-gray-600 mt-2">Popular items across all categories</p>
            </div>
            <Link
              to="/products"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
            >
              View All <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
