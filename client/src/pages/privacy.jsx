import React from "react";
import  protectRoute  from "../components/auth/protectedRoutes";
import SideBar from "../components/home/sideBar";
import Header from "../components/navBar/header";
import Privacy from "../components/privacy/privacy";

const ContactPage = () => {
  return (
    <div className="bg-gray-200 dark:bg-mainDark flex h-[100vh] overflow-y-scroll">
        <SideBar isPrivacy={true} display="hidden md:flex h-fit max-h-[100vh] px-5" />
        <div className="w-full h-[100vh] overflow-y-scroll">
            <Header/>
            <Privacy />
        </div>
      </div>
  );
}

export default ContactPage;