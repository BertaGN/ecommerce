import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home/Home';
import ProductPage  from "./Pages/ProductPage/ProductPage";
import { ProductProvider } from "./Context/ProductContext/ProductContext";
// import Dashboard from './pages/Dashboard/Dashboard';
// import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <ProductProvider>
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/product' element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
    </ProductProvider>
  );
}

export default App;