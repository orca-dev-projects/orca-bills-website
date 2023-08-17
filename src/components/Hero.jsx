import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1  ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex justify-between gap-2">
          <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph} ml-2`}>
              <span className="text-white">Starting </span> from{" "}
              <span className="text-white">₹5,999</span> only
            </p>
          </div>
          <div className=" cursor-pointer mb-2 z-0">
            <a href="#contact">
            <p className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
              Book a free Demo
            </p>
            </a>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className=" ss:flex hidden md:mr-4 mr-0 ">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Billing System .
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elevate your business with our all-in-one app! Seamlessly print bills,
          manage inventory, and coordinate multiple staff members. Gain valuable
          insights through detailed analytics on sales, orders, revenue, and
          visualize your business's growth trajectory with intuitive graphs.
          Revolutionize your operations for success!.Go online with OrcaBills"
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src="https://i.ibb.co/2jV1hpJ/orca2.png"
          alt="billing"
          className="w-auto h-[90%] relative z-[5] rounded-2xl "
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
