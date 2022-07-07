import React from "react";
import "./styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <>
      <section className="intro relative text-white">
        <div className="intro_overlay absolute top-0 bottom-0 right-0 left-0 bg-black opacity-70 z-[-1]"></div>
        <article className="intro_content relative w-full h-full flex flex-col justify-center items-center">
          <h4 className="text-[#FF0077] h4_intro text-xl md:text-3xl">
            HELLOW, WORLD.
          </h4>
          <h1 className="h1_intro font-extrabold text-center md:text-[6rem] sm:text-7xl text-5xl md:py-5 py-3">
            I'm Deepak Sharma.
          </h1>
          <div className="md:flex md:gap-3 pt-1 text-center md:pt-3">
            <span className="h5_intro tracking-wide font-thin md:text-2xl py-0 md:py-1 text-lg block md:inline intro_partition">
              FRONT-END DEVELOPER
            </span>
            <span className="h5_intro tracking-widest font-thin md:text-2xl py-1 text-lg block md:inline">
              UI/UX DESIGNER
            </span>
          </div>
          <div className="pt-10">
            <button className="h4_intro py-3 px-6 border border-[#ffffff] rounded-md">
              MORE ABOUT ME
            </button>
          </div>
          <div className="intro_social absolute bottom-24">
            <FontAwesomeIcon
              icon={faFacebook}
              className="hover:text-[#cc005f] text-2xl md:text-4xl px-3 "
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="hover:text-[#cc005f] text-2xl md:text-4xl px-3 "
            />
            <FontAwesomeIcon
              icon={faGithub}
              className="hover:text-[#cc005f] text-2xl md:text-4xl px-3 "
            />
          </div>
        </article>
      </section>
    </>
  );
};

export default Home;
