import React, { useRef, useLayoutEffect } from "react";
import "./styles/Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarth,
  faCode,
  faPaintBrush,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef(null);
  const gsapUtilSelector = gsap.utils.selector(servicesRef);
  useLayoutEffect(() => {
    ["webdesign", "design", "web", "consultancy"].forEach((className) => {
      gsap.from(gsapUtilSelector(`.${className}`), {
        scrollTrigger: {
          trigger: `.${className}`,
          toggleActions: "restart none none none",
        },
        y: 80,
        duration: 2,
        opacity: 0,
        ease: "power4",
      });
    });
  }, []);
  const servicesData = [
    {
      icon: faEarth,
      title: "Webdesign",
      body: "When your audience visits your website, it gives them their first impression of your business. They will judge your business within seconds. In these first few seconds, you want to make a positive impact on your audience.",
    },
    {
      icon: faPaintBrush,
      title: "UI/UX Design",
      body: "UX/UI Design plays an essential role in achieving this goal. The UX/UI Design of the application improves the user experience and customer satisfaction that ultimately helps increase the number of users of the specific application.",
    },
    {
      icon: faCode,
      title: "Web Development",
      body: "A well-designed website is essential for reaching a larger audience and generating more leads or customers. Using a website, you can collect and read testimonials about your products and services much more quickly and easily. ",
    },
    {
      icon: faMessage,
      title: "Consultancy",
      body: "A website can be a valuable tool to any business. Planning, developing, and promoting a website properly is the only way to ensure that the website will be successful. The “success” of a website can only be determined by obtaining consistent.",
    },
  ];
  return (
    <section
      className="services relative pt-10 px-4"
      ref={servicesRef}
      id="services"
    >
      <div className="services_overlay absolute top-0 bottom-0 right-0 left-0 bg-black opacity-70 z-[-1]"></div>
      <h3 className="text-[#FF0077] font-bold tracking-widest text-center ">
        SERVICES
      </h3>
      <h2 className="text-3xl font-bold leading-10 text-white text-center py-2">
        What Can I Do For You?
      </h2>
      {/* <p className="font-light  text-gray-400 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iusto,
        officia atque amet magni perspiciatis accusamus recusandae, delectus
        minus placeat ut maiores neque ea deleniti mollitia? Ullam qui magnam
        placeat!
      </p> */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-11 lg:grid-cols-4 pb-20">
        {servicesData.map(({ icon, title, body }) => {
          return (
            <div key={title} className={`fade_in ${title.toLowerCase()}`}>
              <FontAwesomeIcon
                icon={icon}
                className=" w-full mx-auto text-[#ff0077] text-3xl"
              />
              <h2 className="font-bold text-2xl text-white text-center py-3">
                {title}
              </h2>
              <p className="text-slate-400 sm:px-9 md:px-1 text-justify">
                {body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
