import React, { useState } from "react";
import { ChrevonDown, CloseCirled } from "../../../assets/icons/icons";
import Logo from "../../../assets/Images/logo.1.png";
import { Link } from "react-router-dom";

export const HomeAll = (props) => {
  const [hidden, setHidden] = useState("hidden");
  const toggleMenu = () => {
    if (hidden === "hidden") {
      setHidden("");
    } else {
      setHidden("hidden");
    }
  };
  return (
    <div
      className={`${props.display} flex md:gap-5 gap-2 items-center mb-6 justify-end`}
    >
      <div className="relative">
        <div
          onClick={toggleMenu}
          className="bg-gray-200 dark:bg-gray-700 rounded-full p-1 h-10 w-10 sm:flex items-center hidden justify-center"
        >
          <ChrevonDown />
        </div>
        <div
          className={`p-2 bg-white rounded-md border-2 shadow-md dark:bg-gray-200 dark:border-none absolute z-[1] left-1/2 transform -translate-x-1/2 ${hidden} transition-all duration-1000 moreHome flex flex-col gap-2`}
        >
          <CloseCirled position="place-self-end" action={toggleMenu} />
          <button
            className="py-1 px-3 rounded-md text-gray-200 bg-red-500"
            onClick={props.logout}
          >
            Logout
          </button>
        </div>
      </div>

      <Link to="/u/user">
        {" "}
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-black w-fit overflow-hidden">
            <img
              className="object-cover h-10 w-10"
              src="/Images/profile.jpeg"
              alt="the profile image"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export const LogoImage = (props) => {
  return (
    <div className={`${props.display}`}>
      <img src={Logo} alt="the logo of socialite" />
    </div>
  );
};
