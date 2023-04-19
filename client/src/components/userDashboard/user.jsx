import React from "react";

const User = () => {
  return (
    <div className="main-container bg-white w-11/12 md:w-10/12 2xl:w-8/12 mx-auto mt-10">
      <div className="relative w-full h-fit ">
        <img
          className="w-full h-[25vh] sm:h-[40vh] object-cover"
          src="/Images/profile.jpeg"
          alt="the cover image"
        />
        <img
          className="object-cover w-36 h-36 rounded-full absolute top-3/4 left-1/2 transform -translate-x-1/2 border-white border-[5px]"
          src="/Images/profile.jpeg"
          alt="the profile image"
        />
      </div>
    </div>
  );
};

export default User;
