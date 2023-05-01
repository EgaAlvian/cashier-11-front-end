import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddProduct from "./pages/AddProduct";
import Home from "./pages/Home";
import EditProduct from "./pages/EditProduct";
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/edit-product" element={<EditProduct />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
