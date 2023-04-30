import React from "react";
import SideBar from "../components/home/sideBar";
import Header from "../components/navBar/header";
import About from "../components/about/about";

const ContactPage = () => {
  return (
    <div className="bg-gray-200 dark:bg-mainDark flex h-[100vh] overflow-y-scroll">
        <SideBar isAbout={true} display="hidden md:flex h-fit max-h-[100vh] px-5" />
        <div className="w-full h-[100vh] overflow-y-scroll">
            <Header/>
            <About />
        </div>
      </div>
  );
}

export default ContactPage;