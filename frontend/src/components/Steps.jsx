import React from "react";
import { assets } from "../assets/assets";

const Steps = () => {
  return (
    <div className="mx-4 py-20 lg:mx-44 lg:py-40">
      <h1 className="h1">
        Steps to remove background <br /> image in seconds
      </h1>
      <div className="flex items-start justify-center flex-wrap gap-4 mt-16 xl:mt-24">
        <div className="flex items-start gap-4 bg-white shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img src={assets.upload_icon} alt="" className="max-w-9" />
          <div>
            <p className="text-xl font-medium">Upload image</p>
            <p className="text-sm text-neutral-500 mt-1">
              Simply drag and drop or browse to <br /> select your image
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img src={assets.remove_bg_icon} alt="" className="max-w-9" />
          <div>
            <p className="text-xl font-medium">Remove Background</p>
            <p className="text-sm text-neutral-500 mt-1">
              Cleanly separate your subject from <br /> the background with one
              click
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img src={assets.download_icon} alt="" className="max-w-9" />
          <div>
            <p className="text-xl font-medium">Download image</p>
            <p className="text-sm text-neutral-500 mt-1">
              Get your processed image instantly, <br /> ready to use anywhere
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
