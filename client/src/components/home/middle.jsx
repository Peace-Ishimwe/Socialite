import React, { useState } from "react";
import PostShare from "./middle/PostShare";
import SuggestedForYou from "./middle/suggestedForYou";
import PostHome from "./middle/postHome";
import Header from "../navBar/header";

const Middle = () => {
  return (
    <main className="header-home w-full md:w-10/12 lg:w-8/12 overflow-scroll h-[100vh]">
      <Header homeDisplay = 'lg:hidden' />
      <PostShare />
      <SuggestedForYou />
      <PostHome />
    </main>
  );
};

export default Middle;