import React from "react";
import { Link } from "react-router-dom"; //import Link (creating links) from react-router-dom for routing functionality
import IconMenu from "../assets/images/icon-menu.svg"; //import the icon-menu.svg file from the assets/images folder
import { useState } from "react"; //import the useState hook from React

const NavBar = () => {
  //useState hook from React - determines whether the sidebar is open or not
  const [isOpen, setIsOpen] = useState(false); //useState hook to manage the state of the navbar
  return (
    <div>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <img src={IconMenu} alt="menu icon when application is mobile" />
        {/* image of the menu icon */}
      </button>
      <nav
        className={`fixed top-0 right-0 h-full bg-white-800 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:relative md:translate-x-0 md:w-auto`}
      ></nav>
      <button className="md:hidden" onClick={() => setIsOpen(false)}>
        Close
      </button>
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
