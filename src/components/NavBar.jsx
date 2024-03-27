import React from "react";
import { Link } from "react-router-dom"; //import Link (creating links) from react-router-dom for routing functionality
import IconMenu from "../assets/images/icon-menu.svg"; //import the icon-menu.svg file from the assets/images folder
import { useState } from "react"; //import the useState hook from React

const NavBar = () => {
  //useState hook from React - determines whether the sidebar is open or not
  const [isOpen, setIsOpen] = useState(false); //useState hook to manage the state of the navbar
  return (
    <div>
      {/* Menu icon img is only visible when the screen is smaller than medium - when toggled isOpen state opening or closing sidebar */}
      <button className="md:hidden block" onClick={() => setIsOpen(!isOpen)}>
        <img
          src={IconMenu}
          alt="menu icon displays when application is mobile"
        />
      </button>
      {/* navigation icon is fixed to top right of screen, width of 64 units and height of full */}
      {/* when isOpen is true then translatex-0 appears showing the sidebar */}
      {/* when the screen is a medium size or larger the sidebar is always visible and positioned normally */}
      <nav
        className={`fixed top-0 right-0 h-full bg-white-800 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:relative md:translate-x-0 md:w-auto`}
      >
        <Link to="/">Home</Link>
        <Link to="/new">New</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/categories">Categories</Link>
        <button className="md:hidden" onClick={() => setIsOpen(false)}>
          Close
        </button>
      </nav>
      <nav className="flex flex-row items-center justify-between p-5">
        <Link to="/">Home</Link>
        <Link to="/new">New</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/categories">Categories</Link>
      </nav>
    </div>
  );
};

export default NavBar;
