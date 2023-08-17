import React from "react";
import { stats } from "../constants";
import styles from "../style";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row `}
        >
          <CountUp
            start={0}
            end={stat.value}
            delay={0}
            enableScrollSpy={true}
            scrollSpyDelay={500}
            className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white"
          > </CountUp>
          <span className="text-4xl text-white mb-2">+</span>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
