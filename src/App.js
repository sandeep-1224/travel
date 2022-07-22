import React from 'react';
import Home from './Home';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Contact from './pages/Contact';
import About from './pages/About';
import Service from './pages/Service';
import Error from './pages/Error';
import Navbar from './Navbar';



function App() {
  return(
  // <>
   <BrowserRouter>
   <Navbar/>
   <Routes>

   <Route exact path="/" element= {<Home/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path ="/service" element={<Service/>}/>
   <Route path ="/contact" element={<Contact/>}/>
   <Route path="/error"  element={<Error/>}/>
   </Routes>
   </BrowserRouter>
        // </>
  )
}

export default App;