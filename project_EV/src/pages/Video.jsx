import React from 'react'
import VideoPlayer from 'react-video-js-player'
import Car from "../images/car.mp4";
import "./Video.css";



const video=()=>{
    const videoSrc = Car;
    const poster = "https://electrek.co/wp-content/uploads/sites/3/2021/02/niu-ngt-review-header.jpg?quality=82&strip=all" 
  return (
    <div className='App'>
      <center>
        <h1><b>VELTRIC</b></h1>
        <VideoPlayer
        src={videoSrc}
        poster={poster}
        width="720px"
        height="480px"
        playbackRates={[0.5,1,3.85,16]}
        />
        </center>
    </div>
    
  )
}

export default video;