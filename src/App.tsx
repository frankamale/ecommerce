
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductRoutes from './routes/products.routes'
import GuestRoutes from './routes/guest.routes'

function App() {


  return (
    <>
      <Routes>
        <Route path="/*" element={<GuestRoutes />} />
        <Route path="/products/*" element={<ProductRoutes />} />

      </Routes>

    </>
  )
}

export default App
