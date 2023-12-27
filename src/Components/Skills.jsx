import React from "react";

const Skills = () => {
  return (
    <>
      <div className=" my-5 py-10 px-2 bg-blue-50 w-full xl:w-[70%] float-right">
        <div>
          <p className=" text-2xl font-bold text-blue-900"> Skills</p>
          <p className=" w-10 h-[3px] bg-blue-500 rounded-md my-2"></p>
        </div>
        <p>
          {" "}
          I'm the kind of person who likes to learn new things and work on it,
          I've learned many skills that can be useful in Information and
          Technology {`(IT)`} field. Here are my skills that I've learned till
          this date:
        </p>
        <div className=" mt-4 flex flex-col space-y-3 xl:flex-row xl:space-x-3 xl:space-y-0">
          <div className=" xl:w-[46%] xl:flex xl:flex-col xl:space-y-5">
            <div>
              <div className=" flex justify-between font-bold">
                <p>HTML</p>
                <p>100%</p>
              </div>
              <div className=" w-full bg-blue-500 h-3"></div>
            </div>

            <div>
              <div className=" flex justify-between font-bold">
                <p>CSS</p>
                <p>90%</p>
              </div>
              <div className=" w-full bg-slate-300 h-3 ">
                <div className=" w-[90%] bg-blue-500 h-full"></div>
              </div>
            </div>

            <div>
              <div className=" flex justify-between font-bold">
                <p>Javascript</p>
                <p>72%</p>
              </div>
              <div className=" w-full bg-slate-300 h-3 ">
                <div className=" w-[72%] bg-blue-500 h-full"></div>
              </div>
            </div>

            <div>
              <div className=" flex justify-between font-bold">
                <p> Tailwind CSS</p>
                <p>90%</p>
              </div>
              <div className=" w-full bg-slate-300 h-3 ">
                <div className=" w-[90%] bg-blue-500 h-full"></div>
              </div>
            </div>
          </div>

          <div className=" xl:w-[46%] xl:flex xl:flex-col xl:space-y-5">
            <div>
              <div className=" flex justify-between font-bold">
                <p>React Js</p>
                <p>79%</p>
              </div>
              <div className=" w-full bg-slate-300 h-3 ">
                <div className=" w-[79%] bg-blue-500 h-full"></div>
              </div>
            </div>
            <div>
              <div className=" flex justify-between font-bold">
                <p>Next Js</p>
                <p>81%</p>
              </div>
              <div className=" w-full bg-slate-300 h-3 ">
                <div className=" w-[81%] bg-blue-500 h-full"></div>
              </div>
            </div>
            <div>
              <div className=" flex justify-between font-bold">
                <p>Git/Github</p>
                <p>60%</p>
              </div>
              <div className=" w-full bg-slate-300 h-3 ">
                <div className=" w-[60%] bg-blue-500 h-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
