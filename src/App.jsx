import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About';
import ContactUs from './ContactUs';
import BranchesInMexico from './BranchesInMexico';
import NotFound from './NotFound';
import Catalogo from './Catalogo';
import ProductDescription from './ProductDescription';
import Home from './Home'


function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="Catalogo" element={<Catalogo/>} />
      <Route path="Contact" element={<ContactUs/>} />
      <Route path="Sucursales" element={<BranchesInMexico/>} />
      <Route path="About" element={<About/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="product/:id" element={<ProductDescription/>} />
      
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App