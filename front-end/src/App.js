import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import CreateProduct from './pages/CreateProduct';
import UpdateProduct from './pages/UpdateProduct';
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import UserVerify from './pages/UserVerify';
import UserProfile from './pages/UserProfile'

function App() {
  return (
      <BrowserRouter>
      <div>
        <Routes>
          <Route path='/products' exact element={<Home/>}></Route>
          <Route path='/' exact element={<UserLogin/>}></Route>
          <Route path='/register' exact element={<UserRegister/>}></Route>
          <Route path='/:id/verify/:token' exact element={<UserVerify/>}></Route>
          <Route path='/create_product' exact element={<CreateProduct/>}></Route>
          <Route path='/update_product/:id' exact element={<UpdateProduct/>}></Route>
          <Route path='/user_profile' exact element={<UserProfile/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>

  );
}

export default App;
