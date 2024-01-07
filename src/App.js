import React, { useState } from "react";
import "./App.css";
// import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import mypic from "./Pictures/amitpic.jpg";
import facebook from "./Pictures/facebook (1).png";
import whatsapp from "./Pictures/whatsapp.png";
import insta from "./Pictures/instagram.png";
import linkedin from "./Pictures/linkedin.png";
import user from "./Pictures/user-3-line.png";
import home from "./Pictures/home-4-line.png";
import resume from "./Pictures/file-reduce-line.png";
import skillicon from "./Pictures/skills1.png";
import contact from "./Pictures/contacticon.png";
import services from "./Pictures/service-fill.png";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

import { Link } from "react-scroll";
import roundedimg from "./Pictures/homeimage-small.png";
const App = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [bol, setBol] = useState(false);
  const [menuBtn, setMenuBtn] = useState(<>&#9776;</>);
  const [navbar, setNavbar] = useState({ transform: "translateX(-100%)" });

  //navbar functionality for smaller devices
  const handleNav = () => {
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

      {/* side nav bar for larger devices*/}

      <nav className=" bg-slate-800 text-white fixed h-full px-5 md:w-[50%] lg:w-[40%] xl:w-[30%] hidden xl:block z-50">
        <div className=" bg-slate-500 w-fit rounded-full mx-auto my-5">
          <img
            src={roundedimg}
            alt=" img not found"
            className=" w-52 h-52 rounded-full p-2"
          />
        </div>
        <p className=" text-white text-3xl font-bold text-center mb-5">
          Amit Paudel
        </p>

        <div className=" flex space-x-3 justify-center">
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
          <div>
            <div className=" flex items-center space-x-3 text-lg cursor-pointer">
              <img
                src={home}
                alt="img not found"
                className=" w-8 h-8 rounded-full bg-blue-400 hover:bg-blue-600"
              />
              <div>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}
                >
                  Home{" "}
                </Link>{" "}
              </div>
            </div>
          </div>

          <div className=" flex items-center space-x-3 text-lg cursor-pointer">
            <img
              src={user}
              alt="img not found"
              className=" w-8 h-8 rounded-full bg-blue-400 hover:bg-blue-600"
            />
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={1}
              duration={500}
            >
              About{" "}
            </Link>{" "}
          </div>

          <div className=" flex items-center space-x-3 text-lg cursor-pointer">
            <img
              src={skillicon}
              alt="img not found"
              className=" w-8 h-8 rounded-full bg-blue-400 hover:bg-blue-600"
            />
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={1}
              duration={500}
            >
              Skills{" "}
            </Link>{" "}
          </div>

          <div className=" flex items-center space-x-3 text-lg cursor-pointer">
            <img
              src={resume}
              alt="img not found"
              className=" w-8 h-8 rounded-full bg-blue-400 hover:bg-blue-600"
            />
            <Link
              to="portfolioo"
              spy={true}
              smooth={true}
              offset={480}
              duration={500}
            >
              Portfolio
            </Link>
          </div>

          <div className=" flex items-center space-x-3 text-lg cursor-pointer">
            <img
              src={services}
              alt="img not found"
              className=" w-8 h-8 rounded-full bg-blue-400 hover:bg-blue-600"
            />
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={1}
              duration={500}
            >
              Services{" "}
            </Link>{" "}
          </div>
          <div className=" flex items-center space-x-3 text-lg cursor-pointer">
            <img
              src={contact}
              alt="img not found"
              className=" w-8 h-8 rounded-full bg-blue-400 hover:bg-blue-600"
            />
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={1}
              duration={500}
            >
              Contact{" "}
            </Link>{" "}
          </div>
        </div>
        <div className=" text-center xl:mt-10 mt-5">
          &copy; Copyright 2023 All rights reserved
        </div>
      </nav>

      {/* side navbar for smaller devices */}
      <nav
        className=" bg-slate-800 text-white lg:hidden fixed h-full px-5 md:w-[50%] z-50"
        style={navbar}
      >
        <div className=" bg-slate-500 w-fit rounded-full mx-auto my-5">
          <img
            src={roundedimg}
            alt=" img not found"
            className=" w-52 h-52 rounded-full p-2"
          />
        </div>
        <p className=" text-white text-3xl font-bold text-center mb-5">
          Amit Paudel
        </p>

        <div className=" flex space-x-3 justify-center">
          <Link to="https://www.facebook.com/ameetpoudel.ameetpoudel">
            {" "}
            <img
              src={facebook}
              alt="img not found"
              className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full cursor-pointer"
            />
          </Link>

          <Link to="https://www.instagram.com/mr.paudel3?igsh=czRsd3JianRodjdy">
            <img
              src={insta}
              alt="img not found"
              className="w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-full cursor-pointer"
            />
          </Link>
          <img
            src={whatsapp}
            alt="img not found"
            className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full cursor-pointer"
          />
          <Link to="https://www.linkedin.com/in/amit-paudel-9ba892278">
            {" "}
            <img
              src={linkedin}
              alt="img not found"
              className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full cursor-pointer"
            />
          </Link>
        </div>

        <div className=" flex flex-col space-y-4 mt-5 mx-5">
          <div
            className=" flex items-center space-x-3 text-lg cursor-pointer"
            onClick={handleNav}
          >
            <img
              src={home}
              alt="img not found"
              className=" w-8 h-8 rounded-full bg-blue-400 hover:bg-blue-600"
            />
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={handleNav}
            >
              Home{" "}
            </Link>
          </div>

          <div
            className=" flex items-center space-x-3 text-lg cursor-pointer"
            onClick={handleNav}
          >
            <img
              src={user}
              alt="img not found"
              className=" w-8 h-8 rounded-full bg-blue-400 hover:bg-blue-600"
            />
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={1}
              duration={500}
              onClick={handleNav}
            >
              About{" "}
            </Link>
          </div>

          <div
            className=" flex items-center space-x-3 text-lg cursor-pointer"
            onClick={handleNav}
          >
            <img
              src={skillicon}
              alt="img not found"
              className=" w-8 h-8 rounded-full bg-blue-400 hover:bg-blue-600"
            />
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={1}
              duration={500}
              onClick={handleNav}
            >
              Skills{" "}
            </Link>
          </div>

          <div
            className=" flex items-center space-x-3 text-lg cursor-pointer"
            onClick={handleNav}
          >
            <img
              src={resume}
              alt="img not found"
              className=" w-8 h-8 rounded-full bg-blue-400 hover:bg-blue-600"
            />
            <Link
              activeClass="active"
              to="portfolioo"
              spy={true}
              smooth={true}
              offset={1}
              duration={500}
              onClick={handleNav}
            >
              Portfolio{" "}
            </Link>
          </div>

          <div
            className=" flex items-center space-x-3 text-lg cursor-pointer"
            onClick={handleNav}
          >
            <img
              src={services}
              alt="img not found"
              className=" w-8 h-8 rounded-full bg-blue-400 hover:bg-blue-600"
            />
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={1}
              duration={500}
              onClick={handleNav}
            >
              Services{" "}
            </Link>
          </div>
          <div
            className=" flex items-center space-x-3 text-lg cursor-pointer"
            onClick={handleNav}
          >
            <img
              src={contact}
              alt="img not found"
              className=" w-8 h-8 rounded-full bg-blue-400 hover:bg-blue-600"
            />
            {/* <p>Contact</p> */}
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={1}
              duration={500}
              onClick={handleNav}
            >
              Contact{" "}
            </Link>
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
