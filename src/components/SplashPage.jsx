import React from 'react'
import Button from "./Button"; // importing Button component
import CardInfo from "./CardInfo"; // importing CardInfo component
import SplashImageDesktop from "../assets/images/image-web-3-desktop.jpg"; // Importing image for desktop


const SplashPage = () => {
  return (
    <div>
        <img src={SplashImageDesktop} alt="Colorful blocks for splash page desktop" />
        <CardInfo />
        <Button />
    </div>
  )
}

export default SplashPage