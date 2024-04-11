import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"

import Layout from "./component/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Forget from "./pages/Forget"
import OurMenu from "./pages/OurMenu"
import About from "./pages/About"
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import AddRecipe from "./pages/AddRecipe";
import ShowRecipe from "./pages/Showrecipe";
import { UserProvider } from "./UserContext";
import Manage from "./component/Manage";
import UserAuth from "./component/UserAuth";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <UserProvider>
      <Routes>
          <Route path="/" element={<Layout />}>

          <Route path="/" element={<Home/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="forget" element={<Forget/>}/>
          <Route path="ourmenu" element={<OurMenu/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="order" element={<Orders/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="addrecipe" element={<UserAuth><AddRecipe/></UserAuth>}/>
          <Route path="showrecipe/:id" element={<UserAuth><ShowRecipe/></UserAuth>}/>
          <Route path="manage" element={<UserAuth><Manage/></UserAuth>}/>
          

            
            

          
          </Route>
        </Routes>
      </UserProvider>
        
      </BrowserRouter>
    </div>
  );
};

export default App;
