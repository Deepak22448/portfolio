import React from "react";
import "./styles/Resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  const workExperienceData = [
    {
      title: "Bachelor Degree",
      duration: "July 2022 - Present",
      subTitle: "Computer Science",
      body: "",
    },
    {
      title: "InterMediate",
      duration: "July 2020 - 2022",
      subTitle: "MPC",
      body: "",
    },
    {
      title: "SSC",
      duration: "July 2019 - 2020",
      subTitle: "School",
      body: "",
    },
  ];
  return (
    <section className="resume pt-11 px-4 md:px-10">
      <h4 className="tracking-widest text-[#FF0077] font-bold text-center mb-3">
        RESUME
      </h4>
      <h1 className="tracking-wider font-bold text-3xl mb-3 text-center">
        More of my credentials
      </h1>
      <p className="font-light opacity-80 text-center md:px-10 mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        optio porro repellendus voluptas debitis iste in explicabo, natus eius
        quisquam mollitia, expedita excepturi temporibus aspernatur facere
        aperiam voluptates nobis quasi!
      </p>
      <h4 className="tracking-widest text-[#FF0077] font-bold text-center mb-3 text-3xl">
        Education
      </h4>
      <div className="bg-[#ebebeb] py-28 overflow-hidden mb-10">
        <div className="resume_education_container h-auto relative ">
          {workExperienceData.map(({ title, duration, subTitle }) => {
            return (
              <article className="pl-16 pr-2 relative lg:flex" key={title}>
                <div className="left_side py-2 text-left pb-4  lg:w-[50%] mr-auto">
                  <h3 className="text-xl font-bold tracking-wider">{title}</h3>
                  <p className="opacity-80 font-light tracking-wide">
                    {duration}
                  </p>
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="text-lg px-3 py-4 bg-black text-white rounded-full absolute left-0 cap_icon"
                  />
                </div>
                <div className="w-14 h-1 bg-slate-300 lg:hidden"></div>
                <div className="right_side text-left pt-3 pb-10 lg:ml-28">
                  <h3 className="text-xl font-bold tracking-wider lg:mb-5">
                    {subTitle}
                  </h3>
                  <p className=" font-light tracking-wide opacity-80">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit quisquam aliquid ratione id? Provident, deserunt.
                    Consequuntur quis atque repudiandae! Quos illum earum porro
                    excepturi delectus voluptates dolorum iure qui odit?
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
