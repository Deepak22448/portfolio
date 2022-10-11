import React, { useRef, useLayoutEffect } from "react";
import ProgressBar from "./ProgressBar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef();
  const profileData = [
    {
      title: "FULLNAME:",
      body: "Deepak Sharma.",
    },
    {
      title: "BIRTH DATE:",
      body: "October 28,2005",
    },
    {
      title: "EMAIL",
      body: "deepaksandeep33@gmail.com",
    },
    {
      title: "AGE",
      body: "16",
    },
  ];
  const gsapUtilSelector = gsap.utils.selector(aboutRef);
  useLayoutEffect(() => {
    gsap.from(gsapUtilSelector(".progress_bar"), {
      scrollTrigger: {
        trigger: ".progress_bar",
        toggleActions: "restart none none none",
      },
      width: "0px",
      duration: 3,
      ease: "power1",
    });
  }, []);

  const skillsData = [
    {
      number: 90,
      name: "HTML",
    },
    {
      number: 80,
      name: "CSS",
    },
    {
      number: 80,
      name: "JavaScript",
    },
    {
      number: 70,
      name: "React",
    },
  ];
  return (
    <>
      <section
        className="about pt-24 container mx-auto"
        ref={aboutRef}
        id="about"
      >
        <article>
          <h5 className="text-[#cc005f] tracking-widest  font-bold text-center">
            ABOUT
          </h5>
          <h3 className="text-3xl text-center font-bold">
            Let me introduce myself.
          </h3>
          <div className="md:flex justify-center items-center mt-3">
            <img
              src="profile.jpg"
              alt="Deepak Sharma profile"
              className="w-36 h-36 rounded-full mx-auto mt-6 mb-4 md:mx-0 md:items-center"
              loading="lazy"
            />
            <p className="px-6 leading-7 text-lg font-light opacity-70  max-w-lg mx-auto md:mx-0 text-justify">
              Hello, I am Deepak Sharma from Hyderabad . I am 16 years old
              frontend , backend developer and UI/ UX designer . I am capable of
              making things you desire.
            </p>
          </div>
        </article>

        {/*  Profile and Skills Container*/}

        <div className="md:flex justify-between  md:px-16 w-full items-baseline gap-2">
          {/* Profile */}
          <article className="about_profile pt-5 font-bold md:w-1/2 px-2 ">
            <h1 className="tracking-widest text-center text-xl md:text-3xl mb-3 ">
              PROFILE
            </h1>
            <p className=" text-lg font-light opacity-70 px-4 md:px-2 text-justify">
              I am 16 years old Right now i am doing my B.tech in computer
              science and Engineering and making interesting projects to push my
              self a level up.
            </p>
            {/* Mapping profile data */}
            <div className="pt-5 px-6 md:px-4">
              {profileData.map(({ title, body }) => {
                return (
                  <div key={title} className="pb-3">
                    <h4 className="font-bold">{title}</h4>
                    <p className="opacity-80 pb-3 font-light">{body}</p>
                  </div>
                );
              })}
            </div>
          </article>
          {/* Skills */}
          <article className="about_skills pt-5 px-6 md:w-1/2">
            <h1 className="tracking-widest text-center text-xl md:text-3xl pb-3 font-bold ">
              SKILLS
            </h1>
            <p className="px-0 text-lg font-light opacity-70 text-justify mb-2">
              I am a MERN stack developer I am very fluent with web technologies
              like JavaScript , typescript and always try build things with
              modern technique to keep my self upto date.
            </p>

            {skillsData.map(({ number, name }) => {
              return (
                <div key={name} className="skill">
                  <h4 className="font-bold text-xl py-2">{name}</h4>
                  <ProgressBar number={number} />
                </div>
              );
            })}
          </article>
        </div>
        <div className="btns_container w-full flex flex-col justify-center items-center mt-10 md:flex-row gap-4 mb-24">
          <a
            href="https://www.linkedin.com/in/deepak-sharma-725a56220"
            target="_blank"
            rel="noopener noreferrer"
            className="border-black w-[80%] py-3 md:max-w-xs border"
          >
            <button className="tracking-widest text-black bg-white text-center w-full">
              HIRE ME
            </button>
          </a>

          <a
            href="DeepakSharma_Resume.pdf"
            download
            className="border-black w-[80%] py-3 md:max-w-xs border bg-black"
          >
            <button className="tracking-widest text-white  w-full ">
              DOWNLOAD CV
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
