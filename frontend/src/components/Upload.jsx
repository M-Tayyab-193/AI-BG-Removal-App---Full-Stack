import React from "react";
import { assets } from "../assets/assets";

const Upload = () => {
  return (
    <div className="pb-16">
      {/* Title */}
      <h1 className="h1 py-6 md:py-16">See the magic. Try now</h1>

      <div className="text-center mb-24">
        <input type="file" id="upload-input1" hidden />
        <label
          htmlFor="upload-input1"
          className="inline-flex gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 cursor-pointer m-auto hover:scale-105 transition-all duration-700"
        >
          <img src={assets.upload_btn_icon} alt="" width={20} />
          <p className="text-white text-sm">Upload your image</p>
        </label>
      </div>
    </div>
  );
};

export default Upload;
