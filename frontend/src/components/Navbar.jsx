import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  const navigate = useNavigate();

  const { credits, loadCredits } = useContext(AppContext);

  useEffect(() => {
    if (isSignedIn) {
      loadCredits();
    }
  }, [isSignedIn]);
  return (
    <div className="flex items-center justify-between mx-4 py-3 lg:mx-44">
      <Link to="/">
        <img src={assets.logo} alt="" className="w-32 sm:w-44 cursor-pointer" />
      </Link>

      {isSignedIn ? (
        <div className="flex items-center gap-2 sm:gap-3">
          <Link to="/buy">
            <button className="mr-2 flex items-center gap-2 px-4 sm:px-7 py-1.5 sm:py-2.5 bg-blue-100 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer">
              <img src={assets.credit_icon} alt="" className="w-5" />
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Credits: {credits}
              </p>
            </button>
          </Link>

          <p className="text-gray-600 max-sm:hidden">Hi, {user.fullName}</p>
          <UserButton />
        </div>
      ) : (
        <button
          className="bg-zinc-800 text-white flex items-center gap-4 text-sm rounded-full px-4 py-2 sm:px-8 sm:py-3 hover:scale-105 transition-all duration-500 cursor-pointer"
          onClick={openSignIn}
        >
          Get Started{" "}
          <img src={assets.arrow_icon} alt="" className="w-3 sm:w-4" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
