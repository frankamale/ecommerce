import { Link, useParams, Navigate } from 'react-router-dom';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import ProductImageGallery from '../components/product-image-gallery';
import ProductInfo from '../components/product-info';
import ProductReviews from '../components/product-reviews';
import RelatedProductsSection from '../components/related-products-section';
import { getProductById, getProductsByCategory, getReviewsByProductId } from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id || '1');

  const product = getProductById(productId);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const customerReviews = getReviewsByProductId(productId);

  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== productId)
    .slice(0, 4)
    .map(p => ({
      id: p.id,
      name: p.name,
      price: p.price,
      originalPrice: p.originalPrice,
      rating: p.rating,
      reviews: p.reviews,
      image: p.images[0],
      inStock: p.inStock,
      isNew: p.isNew,
      discount: p.discount
    }));

  return (
    <div className="min-h-screen bg-gray-50 ">
      <NavBar />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <Link to="/products" className="hover:text-blue-600">
              Products
            </Link>
            <span>/</span>
            <Link
              to={`/categories/${product.category}`}
              className="hover:text-blue-600 capitalize"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="container mx-auto px-4 py-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <ProductImageGallery images={product.images} productName={product.name} />

          {/* Product Info */}
          <ProductInfo
            name={product.name}
            price={product.price}
            originalPrice={product.originalPrice}
            rating={product.rating}
            reviews={product.reviews}
            inStock={product.inStock}
            description={product.description}
            category={product.category}
            brand={product.brand}
          />
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <ProductReviews
            reviews={customerReviews}
            averageRating={product.rating}
            totalReviews={product.reviews}
          />
        </div>

        {/* Related Products */}
        <div className="mb-16">
          <RelatedProductsSection products={relatedProducts} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;