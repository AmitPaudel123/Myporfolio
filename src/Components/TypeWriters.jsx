import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWriters = () => {
  return (
    <div className=" z-[9999]">
      <div className="App ">
        <h1 className=" text-3xl font-bold ">
          I am{" "}
          <span>
            <Typewriter
              words={["Web Developer", " Web Designer"]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={false}
              delaySpeed={2000}
            />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default TypeWriters;
