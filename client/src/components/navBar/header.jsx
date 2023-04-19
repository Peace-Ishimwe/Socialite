import React, { useState } from "react";
import { SideComp } from "../home/sideBar/sideComp";
import { MenuIcon, SearchIcon, Close } from "../../assets/icons/icons";
import { HomeAll } from "../home/homeAll/homeAll";
import SideBar from "../home/sideBar";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  
  const [displayMenu, setDisplayMenu] = useState("hidden");
  const showMenu = () => {
    setDisplayMenu("flex");
  };
  const hideMenu = () => {
    setDisplayMenu("hidden");
  };
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const logOut = () => {
    removeCookie("jwt");
    navigate("/authenticate");
  };

  return (
      <div className="top-middle bg-white dark:bg-majorDark pt-5 lg:pb-5 flex justify-between px-5 w-full gap-5 items-start sticky top-0 shadow-md z-50">
        <div className="md:hidden z-50">
          <SideComp component={<MenuIcon />} onClick={showMenu} />
          <div className="z-50">
            <SideBar
              click={hideMenu}
              close={true}
              display={`${displayMenu} flex z-50  absolute left-0 top-[5.5rem] h-[90vh] w-5/12 menuHome`}
            />
          </div>
        </div>
        <div className="flex gap-1 border-2 rounded-full p-2 bg-white w-6/12 sm:w-7/12 md:w-10/12 lg:mx-auto">
          <SearchIcon />
          <input
            className="outline-none w-full"
            type="search"
            name="search"
            id="search"
            placeholder="connect with friends"
          />
        </div>
        <HomeAll display={props.homeDisplay} />
      </div>
  );
};

export default Header;
