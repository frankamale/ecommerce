import { Route, Routes } from "react-router-dom"
import GuestPage from "../views/guest-page"
import Categories from "../views/categories"
import CategoryDetail from "../views/category-detail"
import Contact from "../views/contact"

const GuestRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<GuestPage/>} />
            <Route path="/categories" element={<Categories/>} />
            <Route path="/categories/:categorySlug" element={<CategoryDetail/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
    )
}
export default GuestRoutes