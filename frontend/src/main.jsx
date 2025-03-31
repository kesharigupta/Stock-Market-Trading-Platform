import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes , Route} from "react-router-dom";

import HomePage from './landing_page/home/HomePage'
import SignUp from './landing_page/signup/SignUp';
import AboutPage from './landing_page/about/AboutPage';
import SupportPage from './landing_page/support/SupportPage';
import ProductPage from './landing_page/product/ProductPage';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';
import PricingPage from './landing_page/pricing/PricingPage';
import NotFound from './landing_page/NotFound';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
   <Routes>
    <Route path='/' element={<HomePage/>} > </Route>
    <Route path='/signup' element={<SignUp/>} > </Route>
    <Route path='/about' element={<AboutPage/>} > </Route>
    <Route path='/product' element={<ProductPage/>} > </Route>
    <Route path='/pricing' element={<PricingPage/>} > </Route>
    <Route path='/support' element={<SupportPage/>} > </Route>
    <Route path='*' element={<NotFound/>} ></Route>
   </Routes>
 <Footer/>
  </BrowserRouter>
)
