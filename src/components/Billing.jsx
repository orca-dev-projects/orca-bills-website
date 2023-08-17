import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src="https://i.ibb.co/gSt5FPW/orca1.png"
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5] rounded"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Easily take charge of your billing and invoicing needs with our
          innovative app. Seamlessly print bills, manage inventory, coordinate
          multiple staff, and gain invaluable insights into sales, orders, and
          revenue trends. Experience the ultimate convenience in business
          management and watch your efficiency soar
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <a href="https://www.apple.com/in/app-store/" target="_blank">
            <img
              src={apple}
              alt="app-store"
              className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
            />
          </a>

          <a href="https://www.play.google.com" target="_blank">
            <img
              src={google}
              alt="google-play"
              className="w-[128px] h-[42px] object-contain cursor-pointer"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Billing;
