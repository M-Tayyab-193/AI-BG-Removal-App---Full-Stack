import React from "react";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const { resultImage, image } = useContext(AppContext);
  return (
    <div className="mx-4 lg:mx-44 my-3 mt-14 min-h-[78vh]">
      <div className="bg-white rounded-lg px-8 py-6 shadow-sm">
        {/* Image Container */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8">
          {/* Left Side */}
          <div>
            <p className="font-semibold text-gray-600 mb-2">Original</p>
            <img
              src={image ? URL.createObjectURL(image) : ""}
              alt=""
              className="rounded-md border"
            />
          </div>
          {/* Right Side */}
          <div className="flex flex-col">
            <p className="font-semibold text-gray-600 mb-2">
              Removed Background
            </p>
            <div className="rounded-md border border-gray-300 overflow-hidden bg-layer relative h-full">
              <img src={resultImage ? resultImage : ""} alt="" />
              {!resultImage && image && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="border-t-3 border-b-3 border-violet-600 rounded-full h-12 w-12 animate-spin"></div>
                </div>
              )}
            </div>
          </div>
          <div></div>
        </div>
        {/* Buttons */}
        {resultImage && (
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 mt-6">
            <button className="px-8 py-2.5 text-violet-600 text-sm border border-violet-600 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer">
              Try another image
            </button>
            <a
              href={resultImage}
              download
              className="px-8 py-2.5 text-white text-sm bg-gradient-to-r  from-violet-600 to-fuchsia-500 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer"
            >
              Download image
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
