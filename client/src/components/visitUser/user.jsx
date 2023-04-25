import React from "react";

const User = () => {
  return (
    <div className="main-container w-11/12 md:w-10/12 2xl:w-8/12 mx-auto mt-10 relative text-gray-700 dark:text-gray-200">
      <div className="relative w-full h-fit dark:bg-subMajorDark bg-white rounded-t-3xl pb-5">
        <div className="relative">
          <img
            className="w-full h-[20vh] min-[460px]:h-[30vh] sm:h-[40vh] object-cover rounded-t-3xl"
            src="/Images/profile.jpeg"
            alt="the cover image"
          />
        </div>
        <div className="relative h-2 flex justify-center">
          <img
            className="object-cover w-36 h-36 rounded-full absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 border-white border-[5px]"
            src="/Images/profile.jpeg"
            alt="the profile image"
          />
        </div>
        <div className="mt-10 flex flex-col gap-1 text-center">
          <div className="names mt-16 sm:mt-5 mb-1 text-xl font-semibold">Peace Ishimwe</div>
          <div>I'm a software engineer</div>
        </div>
      </div>
    </div>
  );
};

export default User;