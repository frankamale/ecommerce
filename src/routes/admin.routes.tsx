import { Route, Routes } from "react-router-dom"
import AdminLayout from "../admin/components/admin-layout"
import Dashboard from "../admin/pages/dashboard"
import Products from "../admin/pages/products"
import Orders from "../admin/pages/orders"
import Customers from "../admin/pages/customers"

const AdminRoutes = () => {
    return(
        <Routes>
            <Route element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="products" element={<Products />} />
                <Route path="orders" element={<Orders />} />
                <Route path="customers" element={<Customers />} />
            </Route>
        </Routes>
    )
}

export default AdminRoutes
