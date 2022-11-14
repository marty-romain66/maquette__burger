import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default function Header() {
  const router = useRouter();
  useEffect(() => {
    console.log(router.pathname);
  }, [router.pathname]);
  // const [datas , setDatas] = React.useState(data);
  // const [isTrue, setIsTrue] = React.useState(false);

  // useEffect(() => {
  //   if(datas.orderOnline  && datas.orderOnline === "1")
  //   {
  //     setIsTrue(true);
  //   } else {
  //     setIsTrue(false);
  //   }
  // }, [data]);

  const handleClickH = (e) => {
    e.preventDefault();
    router.push("/");
  };
  const handleClickM = (e) => {
    e.preventDefault();
    gsap.to(".boxVideo", {
      duration: 0.3,

      opacity: 0,
      ease: "power4.out",
      onComplete: (e) => {
        router.push("/menu");
      },
    });
  };
  const handleClickC = (e) => {
    e.preventDefault();
    if (router.pathname === "/menu") {
      gsap.to(".pageMenu", {
        duration: 0.3,
        opacity: 0,
        ease: "power4.out",
        onComplete: (e) => {
          router.push("/contact");
        },
      });
    } else if (router.pathname === "/") {
      gsap.to(".boxVideo", {
        duration: 0.3,
        opacity: 0,
        ease: "power4.out",
        onComplete: (e) => {
          router.push("/contact");
        },
      });
    }
  };
  const handleClickR = (e) => {
    e.preventDefault();
    router.push("/reservation");
  };

  return (
    <header>
      <div className="title">
        <h1>Le nom de votre resto</h1>
      </div>
      <div className="navBar">
        <ul>
          <li>
            {" "}
            <a href="" onClick={handleClickH}>
              Accueil
            </a>{" "}
          </li>
          <li>
            <a href="" onClick={handleClickM}>
              Menu
            </a>{" "}
          </li>
          {/* { isTrue?  <li><a href="" onClick={handleClickR}>Reserver en ligne</a> </li> : null } */}

          <li>
            {" "}
            <a href="" onClick={handleClickC}>
              Contact
            </a>{" "}
          </li>
        </ul>
      </div>
    </header>
  );
}
