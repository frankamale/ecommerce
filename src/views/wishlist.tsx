import { Link } from 'react-router-dom';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import { Heart, ShoppingCart, Trash2, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useWishlist } from '../context/wishlist-context';
import { useCart } from '../context/cart-context';

const Wishlist = () => {
  const { items, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item: typeof items[0]) => {
    if (item.inStock) {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        inStock: item.inStock
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      {/* Breadcrumb */}
      <div className="bg-white border-b px-4 md:px-10 lg:px-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Wishlist</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-8 px-4 md:px-10 lg:px-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <Heart size={40} className="fill-white" />
            <div>
              <h1 className="text-3xl font-bold">My Wishlist</h1>
              <p className="text-red-100">{items.length} {items.length === 1 ? 'item' : 'items'} in your wishlist</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wishlist Content */}
      <div className="container mx-auto py-8 px-4 md:px-10 lg:px-20">
        {items.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Heart size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6">Save your favorite products here!</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div>
            {/* Header with Clear Button */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Saved Items</h2>
              <Button
                onClick={clearWishlist}
                variant="outline"
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                Clear Wishlist
              </Button>
            </div>

            {/* Wishlist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover"
                    />
                    {item.discount && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        -{item.discount}%
                      </div>
                    )}
                    {!item.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <Link to={`/products/${item.id}`}>
                      <h3 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 transition">
                        {item.name}
                      </h3>
                    </Link>

                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < Math.floor(item.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">({item.reviews})</span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl font-bold text-blue-600">
                        UGX {item.price.toLocaleString()}
                      </span>
                      {item.originalPrice && (
                        <span className="text-gray-400 line-through text-sm">
                          UGX {item.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleAddToCart(item)}
                        disabled={!item.inStock}
                        className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed text-sm font-medium flex items-center justify-center gap-2"
                      >
                        <ShoppingCart size={16} />
                        Add to Cart
                      </Button>
                      <Button
                        onClick={() => removeFromWishlist(item.id)}
                        variant="outline"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 p-2"
                      >
                        <Trash2 size={18} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
