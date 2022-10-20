import  Slider  from '../components/Slider';
import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import  Categories  from "../components/Categories.jsx";
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>  
      <Slider/>  
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
