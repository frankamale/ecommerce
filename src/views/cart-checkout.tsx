import AddressForm from "@/components/checkout/address-form";
import CouponForm from "@/components/checkout/coupon";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  CreditCard,
  Minus,
  Package,
  Plus,
  Store,
  Truck,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as z from "zod";
import Footer from "../components/footer";
import FormItemSelect from "../components/form/form-item-select";
import NavBar from "../components/nav-bar";
import { Button } from "../components/ui/button";
import { useCart } from "../context/cart-context";

// Address types

interface ShippingAddress {
  id: string;
  type: "self_pickup" | "personal" | "shop" | "other";
  fullName: string;
  phone: string;
  city: string;
  area: string;
  landmark: string;
  address: string;
  isDefault?: boolean;
}

const checkoutSchema = z.object({
  // Billing Information
  billingFirstName: z.string().min(1, "First name is required"),
  billingLastName: z.string().min(1, "Last name is required"),
  billingEmail: z.string().email("Invalid email address"),
  billingPhone: z.string().min(1, "Phone number is required"),

  // Selected shipping address
  selectedAddressId: z.string().min(1, "Please select a shipping address"),

  // Delivery date
  deliveryDate: z.string().min(1, "Please select a delivery date"),

  // Payment Information
  paymentMethod: z.enum(["card", "mobile_money", "bank_transfer"]),

  // Terms
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const CartCheckout = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();

  // Address management state
  const [addresses, setAddresses] = useState<ShippingAddress[]>([
    {
      id: "self-pickup",
      type: "self_pickup",
      fullName: "Self Pickup",
      phone: "",
      city: "kampala",
      area: "makindye",
      landmark: "Store Location",
      address: "Our physical store location",
      isDefault: true,
    },
  ]);
  const [selectedAddressId, setSelectedAddressId] = useState("self-pickup");
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      billingFirstName: "",
      billingLastName: "",
      billingEmail: "",
      billingPhone: "",
      selectedAddressId: "self-pickup",
      deliveryDate: "",
      paymentMethod: undefined,
      acceptTerms: false,
    },
  });

  // Redirect if cart is empty
  useEffect(() => {
    if (items.length === 0) {
      navigate("/cart");
    }
  }, [items.length, navigate]);

  const deliveryFee = getCartTotal() > 200000 ? 0 : 10000;
  const subtotal = getCartTotal();
  const total = subtotal + deliveryFee;

  const handleQuantityChange = (
    id: number,
    currentQty: number,
    increment: boolean
  ) => {
    const newQty = increment ? currentQty + 1 : currentQty - 1;
    updateQuantity(id, newQty);
  };

  const onSubmit = async (data: CheckoutFormData) => {
    try {
      const selectedAddress = addresses.find(
        (addr) => addr.id === data.selectedAddressId
      );

      // TODO: Implement actual order submission to backend
      console.log("Order data:", data);
      console.log("Selected address:", selectedAddress);
      console.log("Cart items:", items);
      console.log("Total:", total);

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      navigate("/products");
      // TODO: Show success message or redirect to order confirmation page
    } catch (error) {
      console.error("Order submission failed:", error);
      // TODO: Show error message to user
    }
  };

  if (items.length === 0) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      {/* Breadcrumb */}
      <div className="bg-white border-b px-4 md:px-10 lg:px-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <Link to="/cart" className="hover:text-blue-600">
              Cart
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Checkout</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 px-4 md:px-10 lg:px-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <CreditCard size={40} />
            <div>
              <h1 className="text-3xl font-bold">Checkout</h1>
              <p className="text-blue-100">Complete your order</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Items and Order Summary */}
      <div className="container mx-auto py-8 px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl mb-6 font-bold text-gray-900">
                Order Items
              </h2>

              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="sm:flex gap-4 pb-4 sm:justify-between border-b last:border-b-0"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <Link
                          to={`/products/${item.id}`}
                          className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition"
                        >
                          {item.name}
                        </Link>
                        <p className="text-sm font-bold text-blue-600 mt-1">
                          UGX {item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border rounded-lg">
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                item.id,
                                item.quantity,
                                false
                              )
                            }
                            className="p-2 hover:bg-gray-100 transition"
                          >
                            <Minus size={10} />
                          </button>
                          <span className="text-xs px-4 py-2 border-x">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity, true)
                            }
                            className="p-2 hover:bg-gray-100 transition"
                          >
                            <Plus size={10} />
                          </button>
                        </div>
                        <Button
                          onClick={() => removeFromCart(item.id)}
                          variant="outline"
                          size="sm"
                          className="text-xs text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          Remove
                        </Button>
                      </div>
                      <p className="sm:text-right text-sm mt-1 font-bold text-gray-900">
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
            <div className="bg-white rounded-lg shadow-md sticky top-24">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold text-gray-900">
                  Order Summary
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>UGX {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Delivery Fee</span>
                    <span className={deliveryFee === 0 ? "text-green-600" : ""}>
                      {deliveryFee === 0
                        ? "FREE"
                        : `UGX ${deliveryFee.toLocaleString()}`}
                    </span>
                  </div>
                  {deliveryFee === 0 && (
                    <p className="text-xs text-green-600">
                      You've qualified for free delivery!
                    </p>
                  )}
                  <div className="border-t pt-3"></div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>UGX {total.toLocaleString()}</span>
                  </div>
                </div>
                <CouponForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Address Selection */}
      <div className="container mx-auto pb-8 px-4 md:px-10 lg:px-20">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Truck size={20} />
              Shipping Address
            </h3>
          </div>

          {/* Address Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {addresses.map((address) => (
              <div
                key={address.id}
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  selectedAddressId === address.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => {
                  setSelectedAddressId(address.id);
                  checkoutForm.setValue("selectedAddressId", address.id);
                }}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    name="address"
                    checked={selectedAddressId === address.id}
                    onChange={() => {
                      setSelectedAddressId(address.id);
                      checkoutForm.setValue("selectedAddressId", address.id);
                    }}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {address.type === "self_pickup" && (
                        <Store size={16} className="text-blue-600" />
                      )}
                      {address.type === "personal" && (
                        <Package size={16} className="text-green-600" />
                      )}
                      {address.type === "shop" && (
                        <Store size={16} className="text-purple-600" />
                      )}
                      <span className="font-semibold text-sm capitalize">
                        {address.type === "self_pickup"
                          ? "Self Pickup"
                          : address.type}
                      </span>
                    </div>
                    <p className="font-medium text-gray-900">
                      {address.fullName}
                    </p>
                    {address.phone && (
                      <p className="text-sm text-gray-600">{address.phone}</p>
                    )}
                    <p className="text-sm text-gray-600 capitalize">
                      {address.city}, {address.area}
                    </p>
                    {address.landmark && (
                      <p className="text-sm text-gray-600">
                        {address.landmark}
                      </p>
                    )}
                    <p className="text-sm text-gray-600">{address.address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add New Address Button */}
          {!showAddAddressForm && (
            <Button
              onClick={() => setShowAddAddressForm(true)}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Plus size={16} />
              Add New Address
            </Button>
          )}

          {/* Add Address Form */}
          {showAddAddressForm && (
            <div className="border border-gray-200 rounded-lg p-6 mt-4">
              <h4 className="text-lg font-semibold mb-4">Add New Address</h4>
              <AddressForm
                setAddresses={setAddresses}
                setShowAddAddressForm={setShowAddAddressForm}
                setSelectedAddressId={setSelectedAddressId}
                checkoutForm={checkoutForm}
              />
            </div>
          )}
        </div>
      </div>

      {/* Checkout Form */}
      <div className="container mx-auto pb-8 px-4 md:px-10 lg:px-20">
        <Form {...checkoutForm}>
          <form
            onSubmit={checkoutForm.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <CreditCard size={20} />
                    Payment Method
                  </h3>
                </div>
                <div>
                  <FormItemSelect
                    form={checkoutForm}
                    name="paymentMethod"
                    label="Select Payment Method"
                    placeholder="Choose payment method"
                    options={[
                      { label: "Credit/Debit Card", value: "card" },
                      { label: "Mobile Money", value: "mobile_money" },
                      { label: "Bank Transfer", value: "bank_transfer" },
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="pt-6">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    {...checkoutForm.register("acceptTerms")}
                    className="rounded border-gray-300"
                  />
                  <label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <Link to="/legal" className="text-blue-600 hover:underline">
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link to="/legal" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {checkoutForm.formState.errors.acceptTerms && (
                  <p className="text-sm text-red-600 mt-1">
                    {checkoutForm.formState.errors.acceptTerms.message}
                  </p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Link to="/cart">
                <Button
                  type="button"
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <ArrowLeft size={16} />
                  Back to Cart
                </Button>
              </Link>
              <Button
                type="submit"
                className="flex-1 bg-blue-600 text-white hover:bg-blue-700"
                disabled={checkoutForm.formState.isSubmitting}
              >
                {checkoutForm.formState.isSubmitting
                  ? "Processing..."
                  : "Place Order"}
              </Button>
            </div>
          </form>
        </Form>
      </div>

      <Footer />
    </div>
  );
};

export default CartCheckout;
