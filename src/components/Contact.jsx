import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import EmailSuccess from "./EmailSucces";
import GetStarted from "./GetStarted";

const Contact = ({ handleClick }) => {
  const form = useRef();
  const [isOk, setIsOk] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gxwl2ik",
        "template_sr18uxn",
        form.current,
        "eb_uL2wZkX0YHjHdO"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );

    setIsOk(true);
  };

  return (
    <>
    <div id="contact" className="text-white font-poppins bg-transparent border-2 p-10 rounded-2xl flex justify-center  relative top-10 ">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl mb-0">Schedule a free demo</h2>
        <p>Get in touch with our team to clarify your queries</p>
        {isOk && <EmailSuccess />}
        {!isOk && (
          <form ref={form} onSubmit={handleSubmit} className=" flex flex-col ">
            <label className="block mb-2">
              Name:
              <input
                type="text"
                name="from_name"
                className="block text-primary w-full border border-gray-300 rounded py-2 px-3 mt-1 focus:outline-none focus:border-blue-500"
                required
              />
            </label>
            <label className="block mb-2">
              Email:
              <input
                type="email"
                name="from_email"
                required
                className="block  text-primary  w-full border border-gray-300 rounded py-2 px-3 mt-1 focus:outline-none focus:border-blue-500"
              />
            </label>
            <label className="block mb-2">
              Phone Number and Message:
              <textarea
              required
                name="message"
                className="block  text-primary  w-full border border-gray-300 rounded py-2 px-3 mt-1 resize-none focus:outline-none focus:border-blue-500"
              />
            </label>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
              type="submit"
            >
              Send
            </button>
          </form>
        )}
      </div>
      
    </div>
    <div className=" ml-9 lg:ml-[35vw]">
    < GetStarted/>
    </div>
    
    </>
  );
};

export default Contact;
