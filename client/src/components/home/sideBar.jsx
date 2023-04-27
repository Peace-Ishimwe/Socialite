import React from "react";
import {
  HomeIcon,
  AddIcon,
  InfoIcon,
  MessagesIcon,
  MoreIcon,
  NotificationIcon,
  PrivacyIcon,
  PhoneIcon,
  Close,
} from "../../assets/icons/icons";
import { SideComp, AddPost } from "./sideBar/sideComp";
import Switcher from "../theme/switcher";
import { LogoImage } from "./homeAll/homeAll";
import { UserProfile } from "./sideBar/sideComp";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const  SideBar = (props) => {

  return (
    <main
      className={`sidebar-home ${props.display} flex-col gap-10 pl-5 pb-10 overflow-scroll  justify-between bg-white dark:bg-majorDark md:w-[15%] min-w-fit `}
    >
      
      <div className="sticky top-0 bg-white dark:bg-majorDark pt-5 flex justify-between">
        <LogoImage />
        {props.close && <SideComp component={<Close click={props.click} />} />}
      </div>
      <div className="flex flex-col gap-10">
        <a href="/">
          <SideComp component={<HomeIcon />} title={"Home"} true={props.isHome} />
        </a>
        <a href="/u/messages"><SideComp component={<MessagesIcon />} title={"Messages"} /></a>
        <a href="/u/notifications"><SideComp component={<NotificationIcon />} title={"Notifications"} /></a>
        <a href="/about">
          <SideComp component={<InfoIcon />} title={"About us" } true={props.isAbout} />
        </a>
        <a href="/contact">
          <SideComp component={<PhoneIcon />} title={"Contact us"} true={props.isContact}  />
        </a>
        <a href="/privacy-policy">
          <SideComp component={<PrivacyIcon />} title={"Privacy"} true={props.isPrivacy}  />
        </a>
        <SideComp component={<Switcher />} title={"Theme"} />
      </div>
      <AddPost component={<AddIcon />} title={"ADD POST"} />
      <UserProfile />
    </main>
  );
};

export default SideBar;
