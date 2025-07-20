import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 lg:px-44 py-3">
      <img src={assets.logo} alt="" width={150} />
      <p className="flex-1 border-l border-l-gray-400 text-sm text-gray-500 pl-4 max-sm:hidden">
        Copyright @mtayyab193 | All rights reserved.
      </p>
      <div className="flex items-center justify-center gap-2">
        <img src={assets.facebook_icon} alt="" width={40} />
        <img src={assets.twitter_icon} alt="" width={40} />
        <img src={assets.google_plus_icon} alt="" width={40} />
      </div>
    </div>
  );
};

export default Footer;
