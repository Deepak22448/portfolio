import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const footerData = [
    {
      icon: faLocation,
      title: "WHERE TO FIND ME",
      body: "",
    },
    {
      icon: faMailBulk,
      title: "EMAIL ME",
      body: "",
    },
    {
      icon: faPhone,
      title: "CALL ME AT",
      body: "",
    },
  ];
  return (
    <section className="contact bg-black px-4">
      <h3 className="font-bold tracking-wider text-[#ff0077] text-center pt-20">
        CONTACT
      </h3>
      <h1 className="text-2xl font-bold text-white text-center leading-10 py-2">
        I'd Love To Hear From You
      </h1>

      <p className="text-slate-400 px-6 max-w-xl text-center mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quia
        quidem atque omnis sed quibusdam laboriosam, rerum molestias sequi
        repellat laudantium consectetur cupiditate aspernatur in, excepturi
        dicta. Repellat, voluptate fugiat.
      </p>
      <form className="pb-20">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="outline-none block w-full pl-8 mx-auto max-w-screen-sm mb-5 py-2 bg-black border-b-2 text-gray-400"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="outline-none block w-full pl-8 mx-auto max-w-screen-sm mb-5 py-2 bg-black border-b-2 text-gray-400"
        />
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          className="outline-none block w-full pl-8 mx-auto max-w-screen-sm mb-5 py-2 bg-black border-b-2 text-gray-400"
        />
        <input
          type="text"
          name="message"
          id="message"
          placeholder="message"
          className="outline-none block w-full pl-8 mx-auto max-w-screen-sm mb-5 py-2 bg-black border-b-2 text-gray-400"
        />
      </form>
      <div className="flex justify-center">
        <button className="bg-[#ff0077]  py-3 mb-10 text-white font-bold w-full max-w-sm ">
          SUBMIT
        </button>
      </div>

      <div class="grid gap-4 grid-cols-1  md:grid-cols-3 pb-10">
        {footerData.map(({ icon, title, body }) => {
          return (
            <div className="max-w-lg mx-auto py-2">
              <FontAwesomeIcon
                icon={icon}
                className="text-[#ff0077] text-4xl text-center py-2 w-full mx-auto"
              />
              <h3 className="text-[#ff0077] text-center py-2">{title}</h3>
              <p className="text-slate-400 font-light leading-6 py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                sapiente facere, possimus ipsa magnam eaque et delectus debitis
                consequatur asperiores voluptatem, nihil cumque aspernatur natus
                quibusdam ex. Sit, dicta quos.
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
