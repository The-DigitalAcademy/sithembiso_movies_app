import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video';
import "react-html5video/dist/styles.css";


import introVideo from "./videos/Intro - Lion.mp4";
import Harry from "./images/Harry.jpeg";

const ReactVideoPlayer = () => {
  return (
    <div>
     
      <Video autoPlay loop
        poster={Harry}
        onCanPlayThrough={() => {
          console.log("video play")
        }}
      >
        <source src={introVideo} type="video/webm" />
        
      </Video>
    </div>






  )
}

export default ReactVideoPlayer;