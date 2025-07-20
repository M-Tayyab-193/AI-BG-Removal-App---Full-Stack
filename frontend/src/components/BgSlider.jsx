import React, { useState } from "react";
import { assets } from "../assets/assets";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };
  return (
    <div className=" max-md:mx-12 mx-4 pb-10 md:py-16">
      <h1 className="h1 mb-12 sm:mb-20">
        {/* ---- Title ---- */}
        Remove Background With High <br /> Quality and Accuracy
      </h1>
      <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
        {/* BG Image */}
        <img
          src={assets.image_w_bg}
          alt=""
          style={{
            clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)`,
          }}
        />
        {/* FG Image */}
        <img
          src={assets.image_wo_bg}
          alt=""
          style={{
            clipPath: `inset(0 0 0 ${sliderPosition}% )`,
          }}
          className="absolute top-0 left-0 w-full h-full"
        />
        {/* Slider */}
        <input
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider"
        />
      </div>
    </div>
  );
};

export default BgSlider;
