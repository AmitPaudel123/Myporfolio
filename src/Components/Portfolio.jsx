import React from "react";
import portfolio1 from "../Pictures/wordcounterr.png";
import portfolio2 from "../Pictures/bestwebsite.png";
import portfolio3 from "../Pictures/tempconverter.png";
import portfolio4 from "../Pictures/stoptimer.png";
import portfolio5 from "../Pictures/website.png";

const Portfolio = () => {
  return (
    <>
      <div className="px-2 my-5 py-5 xl:float-right xl:w-[70%]" id="portfolioo">
        <div>
          <p className=" text-2xl font-bold text-blue-900"> Portfolio</p>
          <p className=" w-10 h-[3px] bg-blue-500 rounded-md my-2"></p>
        </div>
        <div>
          <p className="my-5">
            Here are some of the project and sites that I've developed:
          </p>
          <div className=" flex flex-col space-y-5">
            <div className=" xl:flex xl:flex-row xl:space-x-2">
              <img
                src={portfolio2}
                alt="img not found"
                className=" w-full xl:w-[50%] shadow-sm shadow-black mb-5 xl:mb-0"
              />
              <img
                src={portfolio1}
                alt="img not found"
                className="w-full xl:w-[50%] shadow-sm shadow-black"
              />
            </div>
            <div className="  xl:flex xl:flex-row xl:space-x-2">
              <img
                src={portfolio3}
                alt="img not found"
                className="w-full xl:w-[50%] shadow-sm shadow-black mb-5 xl:mb-0"
              />
              <img
                src={portfolio4}
                alt="img not found"
                className="w-full xl:w-[50%] shadow-sm shadow-black"
              />
            </div>
            <div>
              <img
                src={portfolio5}
                alt="img not found "
                className="shadow-sm shadow-black"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
