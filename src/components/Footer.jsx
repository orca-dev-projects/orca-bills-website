import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
     
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <div className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          2023 orcatech. All Rights Reserved.
          <div className="text-white text-[12px]">Email : orcatech.ot@gmail.com , Contact No : +919674585722 </div>
        </div>
        
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <a key={index} href={social.link} target="_blank">
            <img
              src={social.icon}
              key={social.id}
              alt={social.id}
              className={`w-auto h-[25px] object-contain cursor-pointer text-white ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
            </a>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
