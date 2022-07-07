import React from "react";
import ProgressBar from "./ProgressBar";
const About = () => {
  const skillsData = [
    {
      number: 90,
      name: "HTML",
    },
    {
      number: 80,
      name: "Css",
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
      <section className="about pt-24 container mx-auto">
        <article>
          <h5 className="text-[#cc005f] tracking-widest text-center font-bold">
            ABOUT
          </h5>
          <h3 className="text-3xl text-center font-bold">
            Let me introduce myself.
          </h3>
          <img
            src="profile.jpg"
            alt="Deepak Sharma profile"
            className="w-24 h-24 rounded-full mx-auto mt-6 mb-4"
          />
          <p className="px-6 leading-7 text-lg font-light opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            quo dolore voluptates earum aliquid. Expedita magnam saepe
            voluptatibus accusamus, quam laboriosam doloribus quod eos,
            consectetur voluptatem laudantium vitae et omnis. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Amet quod numquam nam ut
            aperiam dolorem mollitia, aspernatur, nisi quisquam corporis eos
            eum! Id blanditiis vel nemo harum reprehenderit! Veniam, enim!
          </p>
        </article>

        {/*  Profile and Skills Container*/}
        <div className="md:flex justify-between items-center md:px-16">
          {/* Profile */}
          <article className="about_profile pt-20  font-bold md:pt-10">
            <h1 className="tracking-widest text-center text-xl md:text-3xl">
              PROFILE
            </h1>
            <p className="px-6 md:px-4 text-lg font-light opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              voluptates, nihil aut excepturi magni delectus maiores repudiandae
              harum saepe corrupti est explicabo. Iste dolorum aliquid nisi
              recusandae veniam repellat officiis.
            </p>
            <div className="pt-5 px-6 md:px-4">
              <h4 className="font-bold">FULLNAME:</h4>
              <p className="opacity-80 pb-3 font-light">Deepak Sharma</p>
              <h4 className="font-bold">BIRTH DATE:</h4>
              <p className="opacity-80 font-light pb-3">October 28,2005</p>
              <h4 className="font-bold">EMAIL:</h4>
              <p className="opacity-80 font-light pb-3">
                deepaksandeep33@gmail.com
              </p>
              <h4 className="font-bold">JOB:</h4>
              <p className="opacity-80 font-light">Student</p>
            </div>
          </article>
          {/* Skills */}
          <article className="about_skills pt-5 px-6">
            <h1 className="tracking-widest text-center text-xl md:text-3xl pb-3 font-bold">
              SKILLS
            </h1>
            <p className="px-6 md:px-4 text-lg font-light opacity-70 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              voluptates, nihil aut excepturi magni delectus maiores repudiandae
              harum saepe corrupti est explicabo. Iste dolorum aliquid nisi
              recusandae veniam repellat officiis.
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
          <button className="tracking-widest text-black bg-white border border-black w-[80%] py-3 md:max-w-xs">
            HIRE ME
          </button>
          <button className="tracking-widest text-white bg-black  w-[80%]  py-3 md:max-w-xs">
            DOWNLOAD CV
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
