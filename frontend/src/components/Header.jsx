import React from "react";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { removeBg } = useContext(AppContext);

  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 sm:mt-20 lg:px-44">
      {/* ----- Left Side ----- */}
      <div>
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
          Remove the <br className="max-md:hidden" />{" "}
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            Background
          </span>{" "}
          from <br className="max-md:hidden" /> images for free.
        </h1>
        <p className="my-6 text-[15px] text-gray-500">
          Upload any image and let our intelligent AI instantly remove the
          background <br className="max-sm:hidden" /> with high accuracy --- no
          design skills or manual editing required.
        </p>
        <div>
          <input
            type="file"
            id="upload-input"
            onChange={(e) => removeBg(e.target.files[0])}
            accept="image/*"
            hidden
          />
          <label
            htmlFor="upload-input"
            className="inline-flex gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 cursor-pointer m-auto hover:scale-105 transition-all duration-700"
          >
            <img src={assets.upload_btn_icon} alt="" width={20} />
            <p className="text-white text-sm">Upload your image</p>
          </label>
        </div>
      </div>

      {/* ----- Right Side ----- */}
      <div className="max-w-md">
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
