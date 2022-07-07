import React from "react";
import "./styles/Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarth,
  faCode,
  faPaintBrush,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const servicesData = [
    {
      icon: faEarth,
      title: "Webdesign",
      body: "",
    },
    {
      icon: faPaintBrush,
      title: "UI/UX Design",
      body: "",
    },
    {
      icon: faCode,
      title: "Web Development",
      body: "",
    },
    {
      icon: faMessage,
      title: "Consultancy",
      body: "",
    },
  ];
  return (
    <section className="services relative pt-10 px-4">
      <div className="services_overlay absolute top-0 bottom-0 right-0 left-0 bg-black opacity-70 z-[-1]"></div>
      <h3 className="text-[#FF0077] font-bold tracking-widest text-center ">
        SERVICES
      </h3>
      <h2 className="text-3xl font-bold leading-10 text-white text-center py-3">
        What Can I Do For You?
      </h2>
      <p className="font-light  text-gray-400 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iusto,
        officia atque amet magni perspiciatis accusamus recusandae, delectus
        minus placeat ut maiores neque ea deleniti mollitia? Ullam qui magnam
        placeat!
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-16 lg:grid-cols-4 pb-20">
        {servicesData.map(({ icon, title }) => {
          return (
            <div key={title}>
              <FontAwesomeIcon
                icon={icon}
                className=" w-full mx-auto text-[#ff0077] text-3xl"
              />
              <h2 className="font-bold text-2xl text-white text-center py-3">
                {title}
              </h2>
              <p className="text-slate-400 sm:px-9 md:px-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, recusandae ea quae delectus sit, veniam dignissimos
                tempora doloremque quo molestiae officiis quis aut libero illo
                earum in expedita nihil odio!
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
