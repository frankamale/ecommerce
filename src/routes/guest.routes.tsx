import { Route, Routes } from "react-router-dom"
import GuestPage from "../views/guest-page"
import Categories from "../views/categories"
import CategoryDetail from "../views/category-detail"

const GuestRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<GuestPage/>} />
            <Route path="/categories" element={<Categories/>} />
            <Route path="/categories/:categorySlug" element={<CategoryDetail/>} />
        </Routes>
    )
}
export default GuestRoutes