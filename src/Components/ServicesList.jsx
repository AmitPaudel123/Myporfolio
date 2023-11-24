import React from "react";
import development from "../Pictures/webdevelopment.png";
import design from "../Pictures/webdesign.png";
import responsive from "../Pictures/responsivedesign.png";
const ServicesList = () => {
  const services = [
    {
      id: Math.random().toString,
      serviceName: "WEB DESIGN",
      pic: design,
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, soluta. Voluptas ab cupiditate, quo quibusdam facilis laudantium illo est modi totam voluptatibus, libero pariatur veniam. Sequi ullam quasi suscipit repellendus.",
    },
    {
      id: Math.random().toString,
      serviceName: "WEB DEVELOPMENT",
      pic: development,
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, soluta. Voluptas ab cupiditate, quo quibusdam facilis laudantium illo est modi totam voluptatibus, libero pariatur veniam. Sequi ullam quasi suscipit repellendus.",
    },
    {
      id: Math.random().toString,
      serviceName: "RESPONSIVE DESIGN",
      pic: responsive,
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, soluta. Voluptas ab cupiditate, quo quibusdam facilis laudantium illo est modi totam voluptatibus, libero pariatur veniam. Sequi ullam quasi suscipit repellendus.",
    },
  ];

  return (
    <>
      <div>
        {services.map((val, index) => {
          return (
            <div
              key={index}
              className=" w-[95%] md:w-[80%] text-center md:mx-auto xl:w-[30%] xl:inline-block xl:mx-3 my-5 h-fit bg-slate-100 mx-2 rounded-md shadow-black shadow-sm py-5 px-3"
            >
              <div className=" w-fit rounded-full p-8 border-8 border-blue-500 mx-auto mb-5">
                {" "}
                <img
                  src={val.pic}
                  alt="img not found"
                  className=" h-10 w-10 "
                />
              </div>
              <p className=" text-center font-semibold text-2xl">
                {val.serviceName}
              </p>
              <p className=" text-lg mt-3">{val.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ServicesList;
