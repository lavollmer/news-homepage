import React from "react";

const NewSection = ({span}) => {
  return (
    <div className={`${span}`}>
    <div className="bg-black">
      <h1 className="font-bold md:text-4xl text-orange-400 px-10 pt-10">New</h1>
      <div>
        <h2 className="font-bold text-1xl text-white px-10 pt-10">Hydrogen VS Electric Cars</h2>
        <p className="text-gray-500 text-md px-10 pt-5 border-b border-gray-400 mx-10 pb-5">Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <div>
        <h2 className="font-bold text-1xl text-white px-10 pt-10">The Downsides of AI Artistry</h2>
        <p className="text-gray-500 text-md px-10 pt-5 border-b border-gray-400 mx-10 pb-5">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <div>
        <h2 className="font-bold text-1xl text-white px-10 pt-10">Is VC Funding Drying Up?</h2>
        <p className="text-gray-500 text-md px-10 pt-5">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
    </div>
  );
};

export default NewSection;
