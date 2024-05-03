import React, { useState } from 'react';


import { Route,Routes } from 'react-router-dom';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home.jsx';
import Contactus from './Components/Pages/Contactus';
import NotFound from './Components/Pages/NotFound.jsx';




const App: React.FC = () => {

  return (

    <>
    <Routes>
    <Route path={"/"} element={<Home/>}> </Route>
    <Route path={"/about"} element={<About/>}> </Route>
    <Route path={"/contactus"} element={<Contactus/>}> </Route>
    <Route path={"*"} element={<NotFound/>}> </Route>
    </Routes>
    
    </>
  );
};

export default App;