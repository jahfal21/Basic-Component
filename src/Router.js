import Products from './pages/Products'
import Users from "./pages/Users";
import { Route, Routes } from "react-router-dom";

function Router() {
    return (
      <Routes>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    );
  }
  export default Router;