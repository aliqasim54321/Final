import Home from "./pages/Home.jsx";
import { Routes, Route , Link} from "react-router-dom";
import React from 'react';
import Register from './pages/Register';
import Login  from "./pages/Login";
import Model1 from "./pages/Model1.jsx";
import Announcement from "./components/Announcement.js";
import Navbar from "./components/Navbar.jsx";
import Model2 from "./pages/Model2"
import Model3 from "./pages/Model3"
import Newsletter from "./components/Newsletter.jsx";
import Footer from "./components/Footer.jsx";
import Chat from "./components/Chat.js";



const App = () => {
  return (

      <>
      <Announcement/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path="/model2" element={< Model2/>} />
        <Route path="/model3" element={< Model3/>} />
        <Route path='/model1' element={<Model1/>} />
      </Routes>
      <Newsletter/>
      <Footer/>
      <Chat/>
      
      </>
      

      
    );
};

export default App;
