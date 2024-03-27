import React from "react";
import Button from "./Button"; // importing Button component

const CardInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h1 className="font-bold md:text-5xl">The Bright Future of Web 3.0?</h1>
      </div>
      <div>
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <Button />
      </div>
    </div>
  );
};

export default CardInfo;
