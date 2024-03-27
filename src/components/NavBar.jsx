import React from "react";
import { Link } from "react-router-dom"; //import Link (creating links) from react-router-dom for routing functionality
import IconMenu from "../assets/images/icon-menu.svg"; //import the icon-menu.svg file from the assets/images folder

const NavBar = () => {
  //useState hook from React - determines whether the sidebar is open or not
  const [isOpen, setIsOpen] = useState(false); //useState hook to manage the state of the navbar
  return (
    <div>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        Menu
      </button>{" "}
      {/* button to toggle the sidebar on mobile devices */}
      <img src={IconMenu} alt="menu icon when application is mobile" />{" "}
      {/* image of the menu icon */}
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
