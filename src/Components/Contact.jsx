import React from "react";
import loc from "../Pictures/loc-icon.png";
import email from "../Pictures/email-blue.png";
import phone from "../Pictures/mobilePhone.png";
import myMap from "../Pictures/map.jpg";
const Contact = () => {
  return (
    <>
      <div className="my-5 py-10 px-2 md:float-right w-full xl:w-[70%]">
        <div>
          <p className=" text-2xl font-bold text-blue-900"> Contact</p>
          <p className=" w-10 h-[3px] bg-blue-500 rounded-md my-2"></p>
        </div>
        <p>
          I'm a professional and highly skilled Web Developer and Web Designer
          who can design and develop very good and responsive sites. So people
          can contact to me if anyone needs to develop and design Websites as
          per their requirement. You can contact and find me by the following
          information:
        </p>

        <div className=" xl:flex  my-5">
          <div className=" mx-1  rounded-sm w-full h-fit shadow-black shadow-sm py-5 flex flex-col space-y-4 px-2 xl:w-[40%]">
            <div className=" flex items-center space-x-2">
              <img src={loc} alt="" className=" w-10 h-10" />
              <div>
                <span className="text-2xl font-semibold"> Location:</span>{" "}
                <p>New Baneshwor, Kathmandu</p>
              </div>
            </div>

            <div className=" flex items-center space-x-2  px-1">
              <img src={email} alt="" className=" w-8 h-8" />
              <div>
                <span className="text-2xl font-semibold"> Email:</span>{" "}
                <p>ameet2357@gmail.com</p>
              </div>
            </div>

            <div className=" flex items-center space-x-2  px-1">
              <img src={phone} alt="" className=" w-10 h-10" />
              <div>
                <span className="text-2xl font-semibold"> Call:</span>{" "}
                <p>9864079370</p>
              </div>
            </div>

            <img src={myMap} alt="img not found" />
          </div>

          <div className=" w-full h-fit shadow-sm  shadow-black px-7 py-5 text-lg rounded-sm xl:w-[60%] my-5 xl:my-0 mx-1">
            <div className=" xl:flex xl:space-x-2 xl:my-2">
              <div>
                <label htmlFor="name">Your Name:</label>
                <br />
                <input
                  type="text"
                  name=""
                  id="name"
                  className=" border-slate-500 border-[1px] w-72np 2xl:w-[17rem] h-10 my-2"
                />
              </div>
              <div>
                <label htmlFor="email">Your Email:</label>
                <br />
                <input
                  type="email"
                  name=""
                  id="email"
                  className=" border-slate-500 border-[1px] w-72 h-10 my-2"
                />
              </div>
            </div>
            <div className="xl:my-2">
              <label htmlFor="subject">Subject:</label>
              <br />
              <input
                type="text"
                name=""
                id="subject"
                className=" border-slate-500 border-[1px] w-72 h-10 my-2 xl:w-full"
              />
            </div>
            <div className="xl:my-2">
              <label htmlFor="message">Message:</label>
              <br />
              <textarea
                name=""
                id="message"
                cols="34"
                rows="7"
                className=" border-slate-500 border-[1px] my-2 xl:w-full xl:h-64 px-2"
              ></textarea>
            </div>
            <div className="xl:my-2">
              <button className=" bg-blue-500 text-white text-center px-5 py-2 rounded-md active:bg-blue-600  xl:mb-[4.8rem]">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
