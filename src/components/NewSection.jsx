import React from "react";

const NewSection = ({span}) => {
  return (
    <div className={`${span}`}>
    <div className="bg-[#00001A] p-5">
      <h1 className=" md:text-4xl text-[#E4A95F] px-2 font-inter-bold">New</h1>
      <div>
        <h2 className=" text-1xl text-white px-2 pt-5 font-inter-bold">Hydrogen VS Electric Cars</h2>
        <p className="text-gray-500 text-xs font-inter-regular px-2 pt-5 border-b border-gray-400 pb-5">Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <div>
        <h2 className="font-bold text-1xl text-white px-2 pt-5">The Downsides of AI Artistry</h2>
        <p className="text-gray-500 text-xs font-inter-regular  px-2 pt-5 border-b border-gray-400 pb-5">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <div>
        <h2 className="font-bold text-1xl text-white px-2 pt-5">Is VC Funding Drying Up?</h2>
        <p className="text-gray-500 text-xs font-inter-regular  px-2 pt-5">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
    </div>
  );
};

export default NewSection;
