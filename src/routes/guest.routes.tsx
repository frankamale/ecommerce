import { Route, Routes } from "react-router-dom"
import GuestPage from "../views/guest-page"

const GuestRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<GuestPage/>} />
        </Routes>
    )
}
export default GuestRoutes