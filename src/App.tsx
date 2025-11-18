
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductRoutes from './routes/products.routes'
import GuestRoutes from './routes/guest.routes'
import { CartProvider } from './context/cart-context'
import { WishlistProvider } from './context/wishlist-context'

function App() {


  return (
    <CartProvider>
      <WishlistProvider>
        <Routes>
          <Route path="/*" element={<GuestRoutes />} />
          <Route path="/products/*" element={<ProductRoutes />} />
        </Routes>
      </WishlistProvider>
    </CartProvider>
  )
}

export default App
