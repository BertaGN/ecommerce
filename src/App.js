import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home/Home';
import ProductPage  from "./Pages/ProductPage/ProductPage";
import { ProductProvider } from "./Context/ProductContext/ProductContext";
import { TotalCart } from "./Pages/TotalCart/TotalCart";
import { Login } from "./Pages/Login/Login";
import { UserProvider } from "./Context/UserContext/UserContext";
import About from "./Pages/About/About";
// import Dashboard from './pages/Dashboard/Dashboard';
// import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <ProductProvider>
      <UserProvider>
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/contact' element={<About />} />
          <Route path='/TotalCart' element={<TotalCart />} />
          <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    </UserProvider>
    </ProductProvider>
  );
}

export default App;