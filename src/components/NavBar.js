import React from "react";
import "./styles/NavBar.css";

const NavBar = () => {
  const toggleMenu = () => {
    document.querySelector(".nav_left").classList.toggle("translate-x-[200%]");
  };
  return (
    <>
      <header className="nav_wrapper flex justify-between pt-4 container mx-auto md:items-center fixed text-white bg-black md:p-3 p-2">
        {/* left side Logo*/}
        <div className="logo px-3 ">
          <h1 className="text-2xl font-bold tracking-wider px-2 border border-red-100 rounded">
            Deepak
          </h1>
        </div>
        {/* right side Links*/}
        <nav className="nav_left fixed top-0 right-0 h-[100vh] pt-16 px-14 ease-in duration-300 translate-x-[200%] md:translate-x-0 md:static md:pt-0 md:px-4 md:h-auto bg-black">
          <ul className="nav_links flex flex-col gap-3 md:flex-row md:gap-5">
            <li className="nav_link text-center cursor-pointer hover:text-[#FF0077] text-lg">
              Home
            </li>
            <li className="nav_link text-center cursor-pointer hover:text-[#FF0077] text-lg">
              About
            </li>
            <li className="nav_link text-center cursor-pointer hover:text-[#FF0077] text-lg">
              Resume
            </li>
            <li className="nav_link text-center cursor-pointer hover:text-[#FF0077] text-lg">
              Services
            </li>
          </ul>
        </nav>
        <div
          className="menu w-11 flex flex-col justify-between items-center md:hidden"
          onClick={toggleMenu}
        >
          <span className="menu_line h-1 w-9 bg-[#FF0077]"></span>
          <span className="menu_line h-1 w-9 bg-[#FF0077]"></span>
          <span className="menu_line h-1 w-9 bg-[#FF0077]"></span>
        </div>
      </header>
    </>
  );
};

export default NavBar;
