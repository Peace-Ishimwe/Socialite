import React from "react";
import  protectRoute  from "../components/auth/protectedRoutes";
import SideBar from "../components/home/sideBar";
import Header from "../components/navBar/header";
import Contact from "../components/contact/contact";

const ContactPage = () => {
  protectRoute()
  return (
    <div className="bg-gray-200 dark:bg-mainDark flex h-[100vh] overflow-y-scroll">
        <SideBar isContact={true} display="hidden md:flex h-fit max-h-[100vh] px-5" />
        <div className="w-full h-[100vh] overflow-y-scroll">
            <Header/>
            <Contact />
        </div>
      </div>
  );
}

export default ContactPage;