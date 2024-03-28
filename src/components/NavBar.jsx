import React from "react";
import { Link } from "react-router-dom"; //import Link (creating links) from react-router-dom for routing functionality
import IconMenu from "../assets/images/icon-menu.svg"; //import the icon-menu.svg file from the assets/images folder
import IconClose from "../assets/images/icon-menu-close.svg"; //import the icon-close.svg file from the assets/images folder
import { useState } from "react"; //import the useState hook from React

const NavBar = () => {
  //useState hook from React - determines whether the sidebar is open or not
  const [isOpen, setIsOpen] = useState(false); //useState hook to manage the state of the navbar
  return (
    <div className="flex flex-row pt-5 pb-10 justify-end">
      {/* Menu icon img is only visible when the screen is smaller than medium - when toggled isOpen state opening or closing sidebar */}
      <button
        className="md:hidden block top-0 right-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={IconMenu}
          alt="menu icon displays when application is mobile"
        />
      </button>
      {/* navigation icon is fixed to top right of screen, width of 64 units and height of full */}
      {/* when isOpen is true then translatex-0 appears showing the sidebar */}
      {/* when the screen is a medium size or larger the sidebar is always visible and positioned normally */}
      <nav
        className={`fixed top-0 right-0 w-3/4 bg-[#FEFDF9] flex transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:relative md:translate-x-0 md:w-auto`}
      >
        {/* Close Icon to close the side navigation bar when in mobile */}
        <button
          className="md:hidden top-0 right-0"
          onClick={() => setIsOpen(false)}
        >
          <img src={IconClose} alt="close icon" />
        </button>
        <div className="flex flex-row text-[#98959C] font-inter-regular justify-end space-x-10 w-full pb-10">
          <Link to="/" className="hover:text-black">Home</Link>
          <Link to="/new" className="hover:text-black">New</Link>
          <Link to="/popular" className="hover:text-black">Popular</Link>
          <Link to="/trending" className="hover:text-black">Trending</Link>
          <Link to="/categories" className="hover:text-black">Categories</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
