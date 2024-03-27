import React from "react";
import { Link } from "react-router-dom"; //import Link (creating links) from react-router-dom for routing functionality

const NavBar = () => {
  return (
    <div>
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
