import React, { useEffect, useState } from "react";
import "./Home.css";
import mypic from "../Pictures/Pic.png";
import bgImg from "../Pictures/bg.jpg";
const Home = () => {
  return (
    <>
      <div className=" h-[600px] md:h-[750px] xl:float-right xl:w-[70%]  home">
        <img
          src={mypic}
          alt="img not found"
          className=" h-[600px] md:h-[750px] absolute right-0 "
        />
        <img src="" alt="" />
        <p className=" text-3xl font-bold z-0 absolute top-[45%] md:top-[35%] xl:top-[45%] mx-[20%] text-white">
          <br />
          Amit Paudel
        </p>
        <p className=" text-3xl font-bold absolute top-[55%] md:top-[41%] xl:top-[55%] mx-[15%] text-white">
          <marquee behavior="scroll" direction="">
            {" "}
            Web Designer & Developer{" "}
          </marquee>
        </p>
      </div>
    </>
  );
};

export default Home;
