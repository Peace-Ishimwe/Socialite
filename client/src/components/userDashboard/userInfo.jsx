import React from "react";

const UserInfo = () => {
  return (
    <div className="followStatus flex mb-4 items-center justify-evenly mt-10 bg-white w-11/12 md:w-10/12 2xl:w-8/12 mx-auto p-5">
      <div className="follow flex flex-col justify-center items-center">
        <span className="dark:text-gray-200 text-gray-700 font-bold text-xl">
          6,890
        </span>
        <span className="dark:text-gray-200 text-gray-700">Followers</span>
      </div>
      <div className="h-14 w-[.13rem] bg-[#cfcdcd]"></div>
      <div className="follow flex flex-col justify-center items-center">
        <span className="dark:text-gray-200 text-gray-700 font-bold text-xl">
          3
        </span>
        <span className="dark:text-gray-200 text-gray-700">Followings</span>
      </div>
    </div>
  );
};

export default UserInfo;
