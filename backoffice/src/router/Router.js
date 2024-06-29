import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../App";
import Product from "../pages/product/Product";
import ProductList from "../pages/product/views/ProductList";
import ProductDetail from "../pages/product/views/ProductDetail";
import AddProduct from "../pages/product/views/AddProduct";
import Dashboard from "../pages/dashboard/index";

import ListEmployees from "../pages/Employees/Employees";
import ListClient from "../pages/Clients/Clients";
import Category from "../pages/category/category";
import Order from "../pages/order/order";
import OrderList from "../pages/order/views/OrderList";
import OrderDetail from "../pages/order/views/OrderDetail";
import Addorder from "../pages/order/views/Addorder";
import CategoryList from "../pages/category/views/CategoryList";
import CategoryDetail from "../pages/category/views/CategoryDetail";
import AddCategory from "../pages/category/views/AddCategory";
import Employees from "../pages/Employees/Employees";
import EmployeesList from "../pages/Employees/views/EmployeesList";
import EmloyeesDetail from "../pages/Employees/views/EmloyeesDetail";
import AddEmloyees from "../pages/Employees/views/AddEmloyees";
import Clients from "../pages/Clients/Clients";
import ClientList from "../pages/Clients/views/ClientList";
import ClientDetail from "../pages/Clients/views/ClientDetail";
import AddClient from "../pages/Clients/views/AddClient";
import { useDispatch, useSelector } from "react-redux";
import { me } from "../store/auth";
import { useEffect } from "react";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import Auth from "../auth/Auth";

export default function Router() {
  const isAuthenticated = useSelector((state) => state.auth?.me);
  console.log(isAuthenticated, "is");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(me());
  }, [dispatch]);
 
  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <Route path="/" element={<App />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Product />}>
              <Route index element={<ProductList />} />
              <Route path="product-detail/:id" element={<ProductDetail />} />
              <Route path="add-product" element={<AddProduct />} />
            </Route>
            <Route path="orders" element={<Order />}>
              <Route index element={<OrderList />} />
              <Route path="OrderDetail/:id" element={<OrderDetail />} />
              <Route path="add-Order" element={<Addorder />} />
            </Route>
            <Route path="category" element={<Category />}>
              <Route index element={<CategoryList />} />
              <Route path="CategoryDetail/:id" element={<CategoryDetail />} />
              <Route path="add-category" element={<AddCategory />} />
            </Route>
            <Route path="Employees" element={<Employees />}>
              <Route index element={<EmployeesList />} />
              <Route path="EmployeeDetail" element={<EmloyeesDetail />} />
              <Route path="add-Employee" element={<AddEmloyees />} />
            </Route>
            <Route path="Client" element={<Clients />}>
              <Route index element={<ClientList />} />
              <Route path="ClientDetail" element={<ClientDetail />} />
              <Route path="add-Client" element={<AddClient />} />
            </Route>
          </Route>
        ) : (
          <Route path="/" element={<Auth />}>
            <Route index element={<Login />} />
            <Route path="sign-up" element={<Signup />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}
