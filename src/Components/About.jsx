import React from "react";
import mypic from "../Pictures/amit.JPG";

const About = () => {
  return (
    <>
      <div className="  px-2 w-full xl:w-[70%] md:float-right" id="about">
        <div>
          <p className=" text-2xl font-bold text-blue-900"> About</p>
          <p className=" w-10 h-[3px] bg-blue-500 rounded-md my-2"></p>
        </div>
        <div>
          <p>
            Hey ! it's me Amit Paudel, a Web designer and developer. I'm very
            passonate in this field. I like coding and designing and developing
            the different types of websites, blogs, portfolio and so on.{" "}
          </p>
          <img
            src={mypic}
            alt=""
            className=" h-fit my-5 md:h-[747px] w-fit md:mx-auto"
          />
          <p className=" text-2xl font-bold text-blue-900">
            Web Designer and Developer
          </p>
          <p> Below here you can watch some detail information about me:</p>
          <div className=" flex flex-col space-y-4 mt-3">
            <p>
              {" "}
              <span className=" font-bold text-lg">Birthday: </span>9 Sept 2002
            </p>
            <p>
              {" "}
              <span className=" font-bold text-lg">Website:</span>{" "}
              www.amitportfolio.com
            </p>
            <p>
              {" "}
              <span className=" font-bold text-lg">Phone:</span> 9876543210
            </p>
            <p>
              {" "}
              <span className=" font-bold text-lg">City:</span> New Baneshwor,
              Kathmandu
            </p>
            <p>
              {" "}
              <span className=" font-bold text-lg">Age:</span> 21 yrs
            </p>
            <p>
              {" "}
              <span className=" font-bold text-lg">Degree:</span> Bachelor
              running
            </p>
            <p>
              {" "}
              <span className=" font-bold text-lg">E-mail:</span>{" "}
              myportfolio123@gmail.com
            </p>
            <p>
              {" "}
              <span className=" font-bold text-lg">Freelance:</span> Available
            </p>
          </div>
          <p className=" my-3">
            I'm a quick learner and I have the potential to perform multiple
            task. I always like to gain more and more knowledge and utilize the
            knowledge for something better. Coding is my passion and I work hard
            day by day to be more proficient in coding and build many amazing
            sites.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
