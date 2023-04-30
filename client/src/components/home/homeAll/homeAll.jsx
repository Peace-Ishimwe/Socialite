import React, { useState } from "react";
import {LogoutIcon,} from "../../../assets/icons/icons";
import Logo from "../../../assets/Images/logo.1.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { getProfileImage } from "../../profileCover/profileCover";
import { Button, Modal } from "@mui/material";

export const HomeAll = (props) => {
  // LOGOUT FUNCTION
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const logOut = () => {
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    removeCookie("jwt");
    navigate("/authenticate");
  };
  const profileImageUrl = getProfileImage();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div
      className={`${props.display} flex md:gap-5 gap-2 items-center mb-6 justify-end`}
    >
      <div className="relative">
        <Button onClick={handleOpen}>
          <div className="bg-gray-200 dark:bg-gray-700 rounded-full p-1 h-10 w-10 sm:flex items-center hidden justify-center">
            <LogoutIcon style={"dark:text-gray-200 text-gray-700"} />
          </div>
        </Button>
        <Modal open={open} onClose={handleClose}>
          <div
            className={`p-10 bg-white rounded-md border-2 dark:bg-mainDark shadow-2xl dark:border-none absolute z-[1] top-[40%] left-1/2 transform -translate-x-1/2 transition-all duration-1000 moreHome flex flex-col gap-2 w-[240px]`}
          >
            <div className="flex justify-between">
              {" "}
              <div className="justify-self-center text-center w-full font-medium text-gray-700 dark:text-gray-200">
                Are you sure ??
              </div>
            </div>
            <button
              className="py-1 px-3 rounded-md text-gray-200 bg-red-500"
              onClick={logOut}
            >
              Logout
            </button>
          </div>
        </Modal>
      </div>

      <Link to="/u/user">
        {" "}
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-black w-fit overflow-hidden">
            {profileImageUrl && (
              <img
                className="object-cover h-10 w-10"
                src={profileImageUrl}
                alt="the profile image"
              />
            )}
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
