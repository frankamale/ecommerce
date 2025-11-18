import { Route, Routes } from "react-router-dom"
import GuestPage from "../views/guest-page"
import Categories from "../views/categories"
import CategoryDetail from "../views/category-detail"
import Contact from "../views/contact"
import Login from "../auth/login"
import Register from "../auth/register"
import Legal from "../views/legal"

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
        </Routes>
    )
}
export default GuestRoutes