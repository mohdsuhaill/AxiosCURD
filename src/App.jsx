import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Create from './Pages/Create';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Edit from './Pages/Edit';



const App = () => {
  const [id,setId]=useState(0)
  return (
    <div>
      <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products setId={setId} />} />
        <Route path='/edit/:id' element={<Edit id={id} /> } />
        <Route path='/create' element={<Create /> } />
      </Routes>
      <div>
        <Footer />
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;