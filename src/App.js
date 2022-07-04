import React from 'react'
import Sidebar from './component/Sidebar/Sidebar'
import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Product from './view/Product/Product';
import Order from './view/Order/Order';
import Earning from './view/Earning/Earning';
import Header from './component/Header/Header';
import Users from './view/Users/Users';
import Setting from './view/Setting/Setting';
import Login from './view/Login/Login';
import Page404 from './view/Page404/Page404';
export default function App() {
  return (
    <BrowserRouter>
      {/* <Sidebar /> */}
      {/* <Header /> */}
      <Routes>
        <Route path="/impalaadmin/customer" element={<Users />} />
        <Route path="/impalaadmin/product" element={<Product />} />
        <Route path="/impalaadmin/order" element={<Order />} />
        <Route path="/impalaadmin/earning" element={<Earning />} />
        <Route path="/impalaadmin/setting" element={<Setting />} />
        <Route path="/impalaadmin/login" element={<Login />} />
        <Route path="*" element ={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  )
}
