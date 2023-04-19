import React from "react";
import { PencilIcon } from "../../assets/icons/icons";

const User = () => {
  return (
    <div className="main-container w-11/12 md:w-10/12 2xl:w-8/12 mx-auto mt-10">

      <div className="relative w-full h-fit dark:bg-subMajorDark bg-white rounded-t-3xl">
        <img
          className="w-full h-[20vh] min-[460px]:h-[30vh] sm:h-[40vh] object-cover rounded-t-3xl"
          src="/Images/profile.jpeg"
          alt="the cover image"
        />
        <img
          className="object-cover w-36 h-36 rounded-full absolute top-3/4 left-1/2 transform -translate-x-1/2 border-white border-[5px]"
          src="/Images/profile.jpeg"
          alt="the profile image"
        />
        <div className="p-2 bg-yellow-500 border-[3px] box-border border-white rounded-full w-fit hidden 2xl:flex absolute top-[100%] left-[55.5%] transform -translate-x-1/2 "></div>
      </div>
      <div className="bg-white dark:bg-subMajorDark py-10 text-gray-700 dark:text-gray-200 text-lg font-medium flex-col flex items-center justify-center rounded-b-lg px-2 sm:px-7">
        <div className="names mt-16 sm:mt-5 mb-1 text-xl font-semibold">Peace Ishimwe</div>
        <div className="flex gap-2 sm:gap-6 items-center">
            <div className="more-about-you text-center">Student at Rwanda Coding Academy and addicte to codes 😄 </div>
            <button type="submit" className="hover:bg-gray-300 p-2 rounded-md dark:hover:bg-gray-500 transition-all duration-1000"><PencilIcon /></button>
        </div>
      </div>
    </div>
  );
};

export default User;
