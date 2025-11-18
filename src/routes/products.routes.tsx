import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import Products from "../views/products";
import ProductDetails from "../views/product-details";

const ProductRoutes = () => {

    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Products />} />
                <Route path="/:id" element={<ProductDetails />} />
            </Route>
        </Routes>
    )
}

export default ProductRoutes;