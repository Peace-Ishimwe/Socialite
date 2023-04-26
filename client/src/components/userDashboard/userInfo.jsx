import React from "react";
import protectRoute from "../auth/protectedRoutes";
import { PencilIcon } from "../../assets/icons/icons";

const UserInfo = () => {
  const [email, firstName, lastName, about, followers, followings, gender , telephone] =
    protectRoute();

  return (
    <div className="main-container mt-10">
      <div className=" w-11/12 md:w-10/12 2xl:w-8/12 mx-auto mt-10 mb-10">
        <div className="flex text-gray-700 dark:text-gray-200 font-extrabold flex-col lg:flex-row justify-evenly  bg-white dark:bg-subMajorDark mx-auto p-5">
          <div className="flex flex-col gap-2">
            {" "}
            <div>First Name: {firstName}</div>
            <div>Last Name: {lastName}</div>
          </div>
          <div className="flex flex-col gap-2">
            {" "}
            <div>Email: {email}</div>
            <div>Gender: {gender}</div>
          </div>
          <div>{telephone != "" && <span>Phone number: {telephone}</span> }</div>
        </div>
        <button
          type="submit"
          className="hover:bg-gray-300 p-2 float-right text-white rounded-md dark:hover:bg-gray-500 transition-all duration-1000"
        >
          <PencilIcon />
        </button>
      </div>
      <div className="followStatus flex mb-10  items-center justify-evenly mt-20 bg-white dark:bg-subMajorDark w-11/12 md:w-10/12 2xl:w-8/12 mx-auto p-5">
        <div className="follow flex flex-col justify-center items-center">
          <span className="dark:text-gray-200 text-gray-700 font-bold text-xl">
            {followers}
          </span>
          <span className="dark:text-gray-200 text-gray-700">Followers</span>
        </div>
        <div className="h-14 w-[.13rem] bg-[#cfcdcd]"></div>
        <div className="follow flex flex-col justify-center items-center">
          <span className="dark:text-gray-200 text-gray-700 font-bold text-xl">
            {followings}
          </span>
          <span className="dark:text-gray-200 text-gray-700">Followings</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
