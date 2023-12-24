import React, { useEffect, useState } from "react";
import "./Home.css";
import mypic from "../Pictures/Pic.png";
import bgImg from "../Pictures/bg.jpg";
import TypeWriters from "./TypeWriters";
const Home = () => {
  return (
    <>
      <div className=" h-[600px] md:h-[750px] xl:float-right xl:w-[70%]  home">
        <img
          src={mypic}
          alt="img not found"
          className=" h-[600px] md:h-[750px] absolute right-0 "
        />
        {/* <img src="" alt="" /> */}
        <div>
          <div
            className="  flex  justify-center items-center flex-col absolute w-[20rem] mx-[5%] md:w-[35rem]   mt-[80%] md:mt-[50%] md:mx-[15%] lg:mx-[18%] lg:mt-[35%]
         xl:mx-[20%] xl:mt-[30%]"
          >
            <div className=" text-3xl font-bold z-0 xl:mx-[5px] text-white">
              <br />
              Amit Paudel
            </div>
            <div className=" text-3xl font-bold text-white">
              <TypeWriters />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
