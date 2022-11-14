import React, { useEffect } from "react";
import axios from "axios";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function menu() {
  useEffect(() => {
    if(window.innerWidth > 768)
    {
    gsap.fromTo('.cardBurger2',{
      opacity: 0
    },{
      opacity: 1,
      stagger: 0.15

    })
    }
    else {
      gsap.fromTo('.cardBurger2',{
        opacity: 0,
        x:"-100%"
      },{
        opacity: 1,
        x:0,
        stagger: 0.15

      })
    }
  }, []);
  useEffect(() => {
    gsap.fromTo('.pageMenu',{
      opacity: 0,
     
    },{
      opacity: 1,
  

    })
  }, []);
  
  return (
    <div className="pageMenu">
      <h1>Liste de nos burgers</h1>
      <div className="pageMenu__box">
        
        {/* {data.map((burger) => ( */}
        <div className="cardBurger2">
          <img src="./asset/burger.avif" alt="" />
          <div className="cardBurger2__text">
            {/* <h3>{burger.name}</h3>
            <p>{burger.description}</p> */}
            <h3>Nom du burger</h3>
            <p>Description du burger</p>
            <p>prix : 10€</p>
          </div>
        </div>
        <div className="cardBurger2">
          <img src="./asset/burger.avif" alt="" />
          <div className="cardBurger2__text">
            {/* <h3>{burger.name}</h3>
            <p>{burger.description}</p> */}
            <h3>Nom du burger</h3>
            <p>Description du burger</p>
            <p>prix : 10€</p>
          </div>
        </div>
        <div className="cardBurger2">
          <img src="./asset/burger.avif" alt="" />
          <div className="cardBurger2__text">
            {/* <h3>{burger.name}</h3>
            <p>{burger.description}</p> */}
            <h3>Nom du burger</h3>
            <p>Description du burger</p>
            <p>prix : 10€</p>
          </div>
        </div>
        <div className="cardBurger2">
          <img src="./asset/burger.avif" alt="" />
          <div className="cardBurger2__text">
            {/* <h3>{burger.name}</h3>
            <p>{burger.description}</p> */}
            <h3>Nom du burger</h3>
            <p>Description du burger</p>
            <p>prix : 10€</p>
          </div>
        </div>
        <div className="cardBurger2">
          <img src="./asset/burger.avif" alt="" />
          <div className="cardBurger2__text">
            {/* <h3>{burger.name}</h3>
            <p>{burger.description}</p> */}
            <h3>Nom du burger</h3>
            <p>Description du burger</p>
            <p>prix : 10€</p>
          </div>
        </div>
        <div className="cardBurger2">
          <img src="./asset/burger.avif" alt="" />
          <div className="cardBurger2__text">
            {/* <h3>{burger.name}</h3>
            <p>{burger.description}</p> */}
            <h3>Nom du burger</h3>
            <p>Description du burger</p>
            <p>prix : 10€</p>
          </div>
        </div>
        <div className="cardBurger2">
          <img src="./asset/burger.avif" alt="" />
          <div className="cardBurger2__text">
            {/* <h3>{burger.name}</h3>
            <p>{burger.description}</p> */}
            <h3>Nom du burger</h3>
            <p>Description du burger</p>
            <p>prix : 10€</p>
          </div>
        </div>
        <div className="cardBurger2">
          <img src="./asset/burger.avif" alt="" />
          <div className="cardBurger2__text">
            {/* <h3>{burger.name}</h3>
            <p>{burger.description}</p> */}
            <h3>Nom du burger</h3>
            <p>Description du burger</p>
            <p>prix : 10€</p>
          </div>
        </div>
    
        
        
      
        
      {/* ))} */}
      </div>
    </div>
  );
}
// export async function getServerSideProps({
//   params,
//   req,
//   res,
//   query,
//   preview,
//   previewData,
//   resolvedUrl,
//   locale,
//   locales,
//   defaultLocale,
// }) {
//   console.log("Logging : " + res);
//   const data = await axios
//     .get("http://localhost:3001/api/products/burgers", {
//       headers: {
//         token: process.env.API_KEY,
//       },
//     })
//     .then((res) => {
//       return res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   return {
//     props: {
//       data,
//     },
//   };
// }
