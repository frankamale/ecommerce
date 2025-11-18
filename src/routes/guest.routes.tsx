import { Route, Routes } from "react-router-dom"
import GuestPage from "../views/guest-page"
import Categories from "../views/categories"
import CategoryDetail from "../views/category-detail"
import Contact from "../views/contact"
import Login from "../auth/login"
import Register from "../auth/register"
import Legal from "../auth/legal"
import Deals from "../views/deals"
import NewArrivals from "../views/new-arrivals"
import Cart from "../views/cart"
import Wishlist from "../views/wishlist"

const GuestRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<GuestPage/>} />
            <Route path="/categories" element={<Categories/>} />
            <Route path="/categories/:categorySlug" element={<CategoryDetail/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/legal" element={<Legal/>} />
            <Route path="/deals" element={<Deals/>} />
            <Route path="/new-arrivals" element={<NewArrivals/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/wishlist" element={<Wishlist/>} />
        </Routes>
    )
}
export default GuestRoutes