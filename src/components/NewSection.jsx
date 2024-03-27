import React from "react";

const NewSection = () => {
  return (
    <div className="bg-black">
      <h1 className="font-bold md:text-4xl text-orange-400 px-10 pt-10">New</h1>
      <div>
        <h2>Hydrogen VS Electric Cars</h2>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <div>
        <h2>The Downsides of AI Artistry</h2>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <div>
        <h2>Is VC Funding Drying Up?</h2>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
  );
};

export default NewSection;
