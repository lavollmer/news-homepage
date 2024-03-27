import React from 'react'
import Logo from "../assets/images/Logo.svg";

const Icon = () => {
  return (
    <div>
        {/* Importing Logo image using image HTML tag, alt for accessibility and src - specify the source URL of the embedded content */}
        <img src={Logo} alt="Logo with bold W" />
    </div>
  )
}

export default Icon