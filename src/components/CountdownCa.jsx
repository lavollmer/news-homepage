import React from "react";
import Retro from "../assets/images/image-retro-pcs.jpg";

const CountdownCa = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="grid grid-cols-4 md:grid-cols-6">
        <div className="col-span-1 md:col-span-2">
          <img src={Retro} alt="Retro PCs" />
        </div>
        <div className="col-span-3 md:col-span-4 pl-2">
            <h1 className="text-gray-400 font-bold text-2xl">01</h1>
            <h2 className="text-black-800 font-bold text-md ">
                Reviving Retro PCs
            </h2>
            <p className="text-gray-800 text-sm ">
                What happens when old PCs are given modern upgrades?
            </p>
        </div>
      </div>
      </div>
  );
};

export default CountdownCa;
