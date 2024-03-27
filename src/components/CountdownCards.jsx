import React from "react";
import Retro from "../assets/images/image-retro-pcs.jpg";
import Laptops from "../assets/images/image-top-laptops.jpg";
import Gaming from "../assets/images/image-gaming-growth.jpg";

const CountdownCards = () => {
  return (
    <div className="grid grid-cols-6 p-10">
      {/* <div className="flex flex-row"> */}
      {/* <div className="flex flex-col"> */}
      <img src={Retro} alt="Retro PCs" />
      <div className="flex flex-col">
        <h1 className="text-gray-800 font-bold text-3xl">01</h1>
        <h2 className="text-black-800 font-bold text-xl">Reviving Retro PCs</h2>
        <p className="text-gray-800 text-md">
          What happens when old PCs are given modern upgrades?
        </p>
        {/* </div> */}
      </div>

      <div>
        <img src={Laptops} alt="Top of laptop" />
      </div>
      <div>
        <h1 className="text-gray-800 font-bold text-3xl">02</h1>
        <h2 className="text-black-800 font-bold text-xl">
          Top 10 Laptops of 2022
        </h2>
        <p className="text-gray-800 text-md">
          Our best picks for various needs and budgets.
        </p>
      </div>

      <div>
        <img src={Gaming} alt="Gaming controller" />
      </div>
      <div>
        <h1 className="text-gray-800 font-bold text-3xl">03</h1>
        <h2 className="text-black-800 font-bold text-xl">
          The Growth of Gaming
        </h2>
        <p className="text-gray-800 text-md">
          How the pandemic has sparked fresh opportunities.
        </p>
      </div>
    </div>
    // </div>
  );
};

export default CountdownCards;
