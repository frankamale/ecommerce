import { Route, Routes } from "react-router-dom"
import AdminLayout from "../admin/components/admin-layout"
import Dashboard from "../admin/pages/dashboard"
import Products from "../admin/pages/products"
import Orders from "../admin/pages/orders"
import Customers from "../admin/pages/customers"
import Analytics from "../admin/pages/analytics"
import Promotions from "../admin/pages/promotions"
import Settings from "../admin/pages/settings"

const AdminRoutes = () => {
    return(
        <Routes>
            <Route element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="products" element={<Products />} />
                <Route path="orders" element={<Orders />} />
                <Route path="customers" element={<Customers />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="promotions" element={<Promotions />} />
                <Route path="settings" element={<Settings />} />
            </Route>
        </Routes>
    )
}

export default AdminRoutes
