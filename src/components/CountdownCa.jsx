import React from "react";
import Retro from "../assets/images/image-retro-pcs.jpg";
import Laptops from "../assets/images/image-top-laptops.jpg";
import Gaming from "../assets/images/image-gaming-growth.jpg";

const CountdownCa = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="grid grid-cols-4 md:grid-cols-6 p-4 flex items-stretch">
        <div className="col-span-1 md:col-span-2">
          <img src={Retro} alt="Retro PCs" />
        </div>
        <div className="col-span-3 md:col-span-4 pl-2 space-y-1">
          <h1 className="text-gray-300 font-inter-bold text-2xl">01</h1>
          <h2 className="text-black-800 font-inter-bold text-sm ">
            Reviving Retro PCs
          </h2>
          <p className="text-gray-600 text-sm ">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-6 p-4 flex items-stretch">
        <div className="col-span-1 md:col-span-2">
          <img src={Laptops} alt="Top of laptop" />
        </div>
        <div className="col-span-3 md:col-span-4 pl-2 space-y-1">
          <h1 className="text-gray-300 font-inter-bold text-2xl">02</h1>
          <h2 className="text-black-800 font-inter-bold text-sm ">
            Top 10 Laptops of 2022
          </h2>
          <p className="text-gray-600 text-sm ">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-6 p-4 flex items-stretch">
        <div className="col-span-1 md:col-span-2">
          <img src={Gaming} alt="Gaming controller" />
        </div>
        <div className="col-span-3 md:col-span-4 pl-2 space-y-1">
          <h1 className="text-gray-300 font-inter-bold text-2xl">03</h1>
          <h2 className="text-black-800 font-inter-bold text-sm ">
            The Growth of Gaming
          </h2>
          <p className="text-gray-600 text-sm ">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownCa;
