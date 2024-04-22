import React from "react";
import BannerImg from "../../assets/banner.png";

const About = () => {
  return (
    <div className="py-14 bg-black duration-300 sm:px-10">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          <div data-aos="fade-up">
            <img
              src={BannerImg}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6 p-5">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary/70 text-7xl ">
                
                </div>
                <div>
                  <p className="text-primary  text-white">Global Fitness</p>
                  <h1 className="text-2xl sm:text-4xl font-bold text-white">About us</h1>
                </div>
              </div>
              <p data-aos="fade-up" className="leading-8 tracking-wide text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, magnam! Tenetur odio quo et maxime?
              </p>
              <p data-aos="fade-up" data-aos-delay="300" className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                tempora.
              </p>
              <button data-aos="fade-up" className="button-outline text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;