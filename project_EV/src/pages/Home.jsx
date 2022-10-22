import  Slider  from '../components/Slider';
import Video from "../pages/Video";
import React from 'react';
import  Categories  from "../components/Categories.jsx";
import Model1 from './Model1';

const Home = () => {
  return (
    <div>
      
      <Slider/>      
      <Categories/>
      <Model1/>
      <Video/>
      
      
      </div>
  )
}

export default Home
