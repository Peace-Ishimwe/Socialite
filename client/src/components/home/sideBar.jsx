import React from "react";
import {
  HomeIcon,
  AddIcon,
  InfoIcon,
  MessagesIcon,
  NotificationIcon,
  PrivacyIcon,
  PhoneIcon,
  Close,
} from "../../assets/icons/icons";
import { SideComp, AddPost } from "./sideBar/sideComp";
import Switcher from "../theme/switcher";
import { LogoImage } from "./homeAll/homeAll";
import { Link } from "react-router-dom";
import { UserProfile } from "./sideBar/sideComp";

const  SideBar = (props) => {

  return (
    <main
      className={`sidebar-home ${props.display} flex-col gap-6 pl-5 pb-3 rounded-b-md overflow-scroll  justify-between bg-white dark:bg-majorDark md:w-[13%] min-w-fit `}
    >
      
      <div className="sticky top-0 bg-white dark:bg-majorDark pt-5 flex justify-between">
        <img src="/Images/logo.1.png" alt="logo image" />
        {props.close && <SideComp component={<Close click={props.click} />} />}
      </div>
      <div className="flex flex-col gap-3">
        <Link to="/">
          <SideComp style="hover:bg-gray-200 dark:hover:bg-mainDark p-2" component={<HomeIcon />} title={"Home"} true={props.isHome} />
        </Link>
        <Link to="/u/messages"><SideComp style="hover:bg-gray-200 dark:hover:bg-mainDark p-2" component={<MessagesIcon />} title={"Messages"} /></Link>
        <Link to="/u/notifications"><SideComp style="hover:bg-gray-200 dark:hover:bg-mainDark p-2" component={<NotificationIcon />} title={"Notifications"} /></Link>
        <Link to="/about">
          <SideComp style="hover:bg-gray-200 dark:hover:bg-mainDark p-2" component={<InfoIcon />} title={"About us" } true={props.isAbout} />
        </Link>
        <Link to="/contact">
          <SideComp style="hover:bg-gray-200 dark:hover:bg-mainDark p-2" component={<PhoneIcon />} title={"Contact us"} true={props.isContact}  />
        </Link>
        <Link to="/privacy-policy">
          <SideComp style="hover:bg-gray-200 dark:hover:bg-mainDark p-2" component={<PrivacyIcon />} title={"Privacy"} true={props.isPrivacy}  />
        </Link>
        <SideComp style="hover:bg-gray-200 dark:hover:bg-mainDark p-2" component={<Switcher />} title={"Theme"} />
      </div>
      
      {props.addPost && <AddPost component={<AddIcon />} title={"ADD POST"} />}
      <UserProfile />
    </main>
  );
};

export default SideBar;