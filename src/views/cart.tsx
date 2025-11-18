import { Link } from 'react-router-dom';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useCart } from '../context/cart-context';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();

  const handleQuantityChange = (id: number, currentQty: number, increment: boolean) => {
    const newQty = increment ? currentQty + 1 : currentQty - 1;
    updateQuantity(id, newQty);
  };

  const deliveryFee = getCartTotal() > 200000 ? 0 : 10000;
  const total = getCartTotal() + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      {/* Breadcrumb */}
      <div className="bg-white border-b px-4 md:px-10 lg:px-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Shopping Cart</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 px-4 md:px-10 lg:px-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <ShoppingCart size={40} />
            <div>
              <h1 className="text-3xl font-bold">Shopping Cart</h1>
              <p className="text-blue-100">{items.length} {items.length === 1 ? 'item' : 'items'} in your cart</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="container mx-auto py-8 px-4 md:px-10 lg:px-20">
        {items.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <ShoppingCart size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some products to get started!</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Start Shopping
              <ArrowRight size={18} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Cart Items</h2>
                  <Button
                    onClick={clearCart}
                    variant="outline"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    Clear Cart
                  </Button>
                </div>

                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 pb-4 border-b last:border-b-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <Link
                          to={`/products/${item.id}`}
                          className="font-semibold text-gray-900 hover:text-blue-600 transition"
                        >
                          {item.name}
                        </Link>
                        <p className="text-lg font-bold text-blue-600 mt-1">
                          UGX {item.price.toLocaleString()}
                        </p>
                        <div className="flex items-center gap-3 mt-3">
                          <div className="flex items-center border rounded-lg">
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity, false)}
                              className="p-2 hover:bg-gray-100 transition"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-4 py-2 border-x">{item.quantity}</span>
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity, true)}
                              className="p-2 hover:bg-gray-100 transition"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          <Button
                            onClick={() => removeFromCart(item.id)}
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">
                          UGX {(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>UGX {getCartTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span className={deliveryFee === 0 ? 'text-green-600 font-semibold' : ''}>
                      {deliveryFee === 0 ? 'FREE' : `UGX ${deliveryFee.toLocaleString()}`}
                    </span>
                  </div>
                  {deliveryFee === 0 && (
                    <p className="text-xs text-green-600">
                      You've qualified for free delivery!
                    </p>
                  )}
                  {deliveryFee > 0 && (
                    <p className="text-xs text-gray-500">
                      Add UGX {(200000 - getCartTotal()).toLocaleString()} more for free delivery
                    </p>
                  )}
                  <div className="border-t pt-3 flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>UGX {total.toLocaleString()}</span>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition font-semibold mb-3"
                >
                  Proceed to Checkout
                </Link>

                <Link
                  to="/products"
                  className="block w-full border border-gray-300 text-gray-700 text-center py-3 rounded-lg hover:bg-gray-50 transition"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
