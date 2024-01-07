import React from "react";
import ServicesList from "./ServicesList";

const Services = () => {
  return (
    <div
      className="my-5 md:my-0 px-2 py-5 w-full xl:w-[70%] md:float-right bg-slate-200"
      id="services"
    >
      <div>
        <p className=" text-2xl font-bold text-blue-900"> Services</p>
        <p className=" w-10 h-[3px] bg-blue-500 rounded-md my-2"></p>
      </div>
      <ServicesList />
    </div>
  );
};

export default Services;
