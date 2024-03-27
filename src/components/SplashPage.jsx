import React from "react";
import CardInfo from "./CardInfo"; // importing CardInfo component
import SplashImageDesktop from "../assets/images/image-web-3-desktop.jpg"; // Importing image for desktop

const SplashPage = ({ span }) => {
  return (
    <div className={`${span}`}>
      <div className="grid grid-cols-1 gap-8">
        <img
          src={SplashImageDesktop}
          alt="Colorful blocks for splash page desktop"
          className="col-span-2"
        />
        <CardInfo className="col-span-1" />
      </div>
    </div>
  );
};

export default SplashPage;
