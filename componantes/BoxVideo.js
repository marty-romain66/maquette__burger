import React, { useEffect } from 'react'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import axios from 'axios';
export default function BoxVideo() {


  gsap.registerPlugin(ScrollTrigger);

useEffect(() => {
  const tl = gsap.timeline()
  tl.fromTo(".boxVideo h1", {
    opacity: 0
  }, {
    opacity: 1,
    duration: 1.5,
  });
  tl.fromTo(".boxVideo h2", {
    opacity: 0
  }, {
    opacity: 1,
    duration: 1.5,
  });

  
}, []);
  return (
    <div className="boxVideo">
      {/* <h1>{data.config}</h1>
      <h2>{data.textDR}</h2> */}
      <h1>Le titre de la video</h1>
      <h2>La description de la video</h2>
        <video src="https://www.umamiburgerparis.com/media/videos/intro.mp4?c=3" autoPlay muted loop></video>
    </div>
  )
}
