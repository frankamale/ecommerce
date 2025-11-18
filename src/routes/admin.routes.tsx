import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../views/admin-dashboard";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminDashboard />} />
            {/* Add more admin routes here as needed */}
        </Routes>
    );
};

export default AdminRoutes;