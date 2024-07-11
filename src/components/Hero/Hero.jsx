import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
import hero_image from "../../assets/image/hero-image.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero_title">
          <div className="orange-circle" />
          <h1>
            Discover <br />
            Most Suitable
            <br /> Property
          </h1>
        </div>
        <div className="hero_content">
          <span>Find a variety of properties that suit you very easilty</span>
          <br />
          <span>Forget all difficulties in finding a residence for you</span>
        </div>
        <div className="hero_input">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 20 20"
            aria-hidden="true"
            color="blue"
            height={25}
            width={25}
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "blue" }}
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <input type="text" />
          <button>Search</button>
        </div>
        <div className="hero_data">
          <div className="achivement">
            <span>
              <CountUp start={8800} end={9000} duration={4} />
              <span>+</span>
            </span>
            <span className="hero_content">Premium Product</span>
          </div>
          <div className="achivement">
            <span>
              <CountUp start={1950} end={2000} duration={4} />
              <span>+</span>
            </span>
            <span className="hero_content">Happy Customer</span>
          </div>
          <div className="achivement">
            <span>
              <CountUp end={28} />
              <span>+</span>
            </span>
            <span className="hero_content">Awards Winning</span>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-img">
          <img src={hero_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
