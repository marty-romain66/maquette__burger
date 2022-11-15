import React, { useEffect } from 'react'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export default function contact() {
  useEffect(() => {
    gsap.fromTo(".pageContact", {
      opacity: 0,
      y: 100,
      }, {
        duration: 0.3,
        opacity: 1,
        y: 0,
        ease: "power4.out",
        });
      
  }, []);
  return (
    <div className='pageContact'>
        <div className="pageContact__box">
            <h2>Nom du restaurant</h2>
            <h3>Adresse</h3>
            <h3>Numéro de téléphone</h3>
            <h3>Adresse mail</h3>

        </div>
      
        </div>
  )
}
