import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import mypic from "./Pictures/amitpic.jpg";
import facebook from "./Pictures/facebook (1).png";
import whatsapp from "./Pictures/whatsapp.png";
import insta from "./Pictures/instagram.png";
import linkedin from "./Pictures/linkedin.png";
import user from "./Pictures/user-3-line.png";
import home from "./Pictures/home-4-line.png";
import resume from "./Pictures/file-reduce-line.png";
import portfolio from "./Pictures/portfolio.png";
import skillicon from "./Pictures/skills1.png";
import contact from "./Pictures/contacticon.png";
import services from "./Pictures/service-fill.png";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
const App = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [bol, setBol] = useState(false);
  const [menuBtn, setMenuBtn] = useState(<>&#9776;</>);
  const [navbar, setNavbar] = useState(
    window.innerWidth < 1280
      ? {
          transform: "translateX(-100%)",
        }
      : { transform: "translateX(0%)" }
  );

  //navbar functionality
  const handleNav = () => {
    console.log("clicked");
    if (bol === false) {
      setMenuBtn(<>&times;</>);
      setNavbar({
        transform: "translateX(0%)",
        transition: " 0.5s ease-in-out",
      });
      setBol(true);
    } else {
      setMenuBtn(<>&#9776;</>);
      setNavbar({
        transform: "translateX(-100%)",
        transition: "0.5s ease-in-out",
      });
      setBol(false);
    }
  };

  //scroll to top functionality

  const goTop = () => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop >= 150) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  });

  //home functionality
  const showHome = () => {
    if (window.innerWidth < 1280) {
      setNavbar({
        transform: "translateX(-100%)",
        transition: "0.5s ease-in-out",
      });
      setMenuBtn(<>&#9776;</>);
      setBol(false);
    }
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  };

  //about functionality
  const showAbout = () => {
    if (window.innerWidth < 1280) {
      setNavbar({
        transform: "translateX(-100%)",
        transition: "0.5s ease-in-out",
      });
      setMenuBtn(<>&#9776;</>);
      setBol(false);
    }
    if (window.innerWidth < 768) {
      window.scrollTo({
        top: 600,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 750,
        behavior: "smooth",
      });
    }
  };

  //skills functionality
  const showSkills = () => {
    if (window.innerWidth < 1280) {
      setNavbar({
        transform: "translateX(-100%)",
        transition: "0.5s ease-in-out",
      });
      setMenuBtn(<>&#9776;</>);
      setBol(false);
    }

    if (window.innerWidth <= 400) {
      window.scrollTo({
        top: 1950,
        behavior: "smooth",
      });
    } else if (window.innerWidth > 400 && window.innerWidth <= 700) {
      window.scrollTo({
        top: 2000,
        behavior: "smooth",
      });
    } else if (window.innerWidth > 700 && window.innerWidth <= 820) {
      window.scrollTo({
        top: 2150,
        behavior: "smooth",
      });
    } else if (window.innerWidth > 820 && window.innerWidth <= 1000) {
      window.scrollTo({
        top: 2160,
        behavior: "smooth",
      });
    } else if (window.innerWidth > 1000 && window.innerWidth <= 1280) {
      window.scrollTo({
        top: 2170,
        behavior: "smooth",
      });
    } else if (window.innerWidth > 1280) {
      window.scrollTo({
        top: 2150,
        behavior: "smooth",
      });
    }
  };

  //portfolio functionality
  const showPortfolio = () => {
    if (window.innerWidth < 1280) {
      setNavbar({
        transform: "translateX(-100%)",
        transition: "0.5s ease-in-out",
      });
      setMenuBtn(<>&#9776;</>);
      setBol(false);
    }

    if (window.innerWidth <= 400) {
      window.scrollTo({
        top: 2475,
        behavior: "smooth",
      });
    } else if (window.innerWidth > 400 && window.innerWidth <= 700) {
      window.scrollTo({
        top: 2515,
        behavior: "smooth",
      });
    } else if (window.innerWidth > 700 && window.innerWidth <= 820) {
      window.scrollTo({
        top: 2620,
        behavior: "smooth",
      });
    } else if (window.innerWidth > 820 && window.innerWidth <= 1000) {
      window.scrollTo({
        top: 2620,
        behavior: "smooth",
      });
    } else if (window.innerWidth > 1000 && window.innerWidth <= 1280) {
      window.scrollTo({
        top: 2610,
        behavior: "smooth",
      });
    } else if (window.innerWidth > 1280) {
      window.scrollTo({
        top: 2580,
        behavior: "smooth",
      });
    }
  };

  // services functionality
  const showServices = () => {
    if (window.innerWidth < 1280) {
      setNavbar({
        transform: "translateX(-100%)",
        transition: "0.5s ease-in-out",
      });
      setMenuBtn(<>&#9776;</>);
      setBol(false);
    }

    if (window.innerWidth <= 400) {
      window.scrollTo({
        top: 3850,
        behavior: "smooth",
      });
    } else if (window.innerWidth > 400 && window.innerWidth <= 700) {
      window.scrollTo({
        top: 4040,
        behavior: "smooth",
      });
    } else if (window.innerWidth > 700 && window.innerWidth <= 820) {
      window.scrollTo({
        top: 5250,
        behavior: "smooth",
      });
    } else if (window.innerWidth > 820 && window.innerWidth <= 1000) {
      window.scrollTo({
        top: 5600,
        behavior: "smooth",
      });
    } else if (window.innerWidth > 1000 && window.innerWidth <= 1280) {
      window.scrollTo({
        top: 6000,
        behavior: "smooth",
      });
    } else if (window.innerWidth > 1280) {
      window.scrollTo({
        top: 4210,
        behavior: "smooth",
      });
    }
  };

  //contact functionality
  const showContact = () => {
    if (window.innerWidth < 1280) {
      setNavbar({
        transform: "translateX(-100%)",
        transition: "0.5s ease-in-out",
      });
      setMenuBtn(<>&#9776;</>);
      setBol(false);
    }

    if (window.innerWidth <= 400) {
      window.scrollTo({
        top: 5180,
        behavior: "smooth",
      });
    } else if (window.innerWidth > 400 && window.innerWidth <= 700) {
      window.scrollTo({
        top: 5380,
        behavior: "smooth",
      });
    } else if (window.innerWidth > 700 && window.innerWidth <= 820) {
      window.scrollTo({
        top: 6450,
        behavior: "smooth",
      });
    } else if (window.innerWidth > 820 && window.innerWidth <= 1000) {
      window.scrollTo({
        top: 6900,
        behavior: "smooth",
      });
    } else if (window.innerWidth > 1000 && window.innerWidth <= 1280) {
      window.scrollTo({
        top: 7000,
        behavior: "smooth",
      });
    } else if (window.innerWidth > 1280) {
      window.scrollTo({
        top: 4800,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* menu button */}
      <button
        className=" fixed bg-red-700 z-50 text-white h-12 w-12 text-2xl  shadow-black shadow-sm cursor-pointer text-center right-5 top-3 rounded-full xl:hidden"
        onClick={handleNav}
        id="menuBtn"
      >
        {menuBtn}
      </button>

      {/* scroll to top button */}
      {showTopBtn && (
        <button
          className=" fixed h-10 w-10 rounded-full text-white text-2xl font-bold bg-red-700 bottom-8 right-5 shadow-sm shadow-black"
          onClick={goTop}
        >
          &uarr;
        </button>
      )}

      {/* side nav bar */}

      <nav
        className=" w-[75%] bg-slate-800 text-white fixed h-full px-5 translate-x-[-100%] xl:w-[30%] xl:translate-x-[0%] z-50"
        style={navbar}
      >
        <div className=" bg-slate-500 w-fit rounded-full mx-auto my-5">
          <img
            src={mypic}
            alt=" img not found"
            className=" w-52 h-52 rounded-full p-2"
          />
        </div>
        <p className=" text-white text-3xl font-bold text-center mb-5">
          Amit Paudel
        </p>

        <div className=" flex space-x-3 justify-center ">
          <img
            src={facebook}
            alt="img not found"
            className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full cursor-pointer"
          />
          <img
            src={insta}
            alt="img not found"
            className="w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-full cursor-pointer"
          />
          <img
            src={whatsapp}
            alt="img not found"
            className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full cursor-pointer"
          />
          <img
            src={linkedin}
            alt="img not found"
            className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full cursor-pointer"
          />
        </div>

        <div className=" flex flex-col space-y-4 mt-5 mx-5">
          <div
            className=" flex items-center space-x-3 text-lg cursor-pointer"
            onClick={showHome}
          >
            <img
              src={home}
              alt="img not found"
              className=" w-8 h-8 rounded-full bg-blue-400 hover:bg-blue-600"
            />
            <p>Home</p>
          </div>

          <div
            className=" flex items-center space-x-3 text-lg cursor-pointer"
            onClick={showAbout}
          >
            <img
              src={user}
              alt="img not found"
              className=" w-8 h-8 rounded-full bg-blue-400 hover:bg-blue-600"
            />
            <p>About</p>
          </div>

          <div
            className=" flex items-center space-x-3 text-lg cursor-pointer"
            onClick={showSkills}
          >
            <img
              src={skillicon}
              alt="img not found"
              className=" w-8 h-8 rounded-full bg-blue-400 hover:bg-blue-600"
            />
            <p>Skills</p>
          </div>

          <div
            className=" flex items-center space-x-3 text-lg cursor-pointer"
            onClick={showPortfolio}
          >
            <img
              src={resume}
              alt="img not found"
              className=" w-8 h-8 rounded-full bg-blue-400 hover:bg-blue-600"
            />
            <p>Portfolio</p>
          </div>

          <div
            className=" flex items-center space-x-3 text-lg cursor-pointer"
            onClick={showServices}
          >
            <img
              src={services}
              alt="img not found"
              className=" w-8 h-8 rounded-full bg-blue-400 hover:bg-blue-600"
            />
            <p>Services</p>
          </div>
          <div
            className=" flex items-center space-x-3 text-lg cursor-pointer"
            onClick={showContact}
          >
            <img
              src={contact}
              alt="img not found"
              className=" w-8 h-8 rounded-full bg-blue-400 hover:bg-blue-600"
            />
            <p>Contact</p>
          </div>
        </div>
        <div className=" text-center xl:mt-10 mt-5">
          &copy; Copyright 2023 All rights reserved
        </div>
      </nav>

      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Contact />
    </>
  );
};

export default App;
