import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from "../pages/Main"
import Register from "../pages/Register"
import Login from "../pages/Login"
import MoviesDetail from "../pages/MovieDetail"
import Navbar from '../components/Navbar';

const AppRouter = () => {
 return (
  <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={ <Main/> } />
    <Route path='/login' element={ <Login/> } />
    <Route path='/register' element={ <Register/> } />
    <Route path='/detail/:id' element={ <MoviesDetail/> } />
   </Routes>
  </BrowserRouter>
 );
};

export default AppRouter;
