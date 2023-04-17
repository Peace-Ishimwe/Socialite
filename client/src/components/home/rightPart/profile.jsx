import React from "react";
import ProfileImage from "../../../assets/Images/profile.jpeg";

const Profile = () => {
  return (
    <div className="profile-user mt-5 bg-gray-200 dark:bg-subMajorDark rounded-2xl overflow-hidden pb-5">
      <div className="relative w-fit">
        <img
          className="w-[20rem] h-[8rem] object-cover"
          src={ProfileImage}
          alt="the cover image"
        />
        <img
          className="object-cover w-28 h-28 rounded-full absolute top-16 left-1/2 transform -translate-x-1/2"
          src={ProfileImage}
          alt="the profile image"
        />
      </div>
      <div className="ProfileName mt-16 flex flex-col items-center justify-center mb-4">
        <span className="dark:text-gray-200 text-gray-700 text-xl font-semibold">
          Peace Ishimwe
        </span>
        <span className="dark:text-gray-200 text-gray-700">
          Junior software developer
        </span>
      </div>
      <hr className=" w-[85%] border  border-[#cfcdcd] mx-auto" />
      <div className="followStatus flex mt-4 mb-4 items-center justify-evenly">
        <div className="follow flex flex-col justify-center items-center">
          <span className="dark:text-gray-200 text-gray-700 font-bold text-xl">
            6,890
          </span>
          <span className="dark:text-gray-200 text-gray-700">Followers</span>
        </div>
        <div className="h-14 w-[.13rem] bg-[#cfcdcd]"></div>
        <div className="follow flex flex-col justify-center items-center">
          <span className="dark:text-gray-200 text-gray-700 font-bold text-xl">
            1
          </span>
          <span className="dark:text-gray-200 text-gray-700">Followings</span>
        </div>
      </div>
      <hr className=" w-[85%] border  border-[#cfcdcd] mx-auto" />
      <div className="text-center mt-4 text-blue-500 text-lg font-semibold">
        <a href="#">My Profile</a>
      </div>
    </div>
  );
};

export default Profile;
