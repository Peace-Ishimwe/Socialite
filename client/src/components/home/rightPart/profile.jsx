import React from "react";
import protectRoute from "../../auth/protectedRoutes";
import {
  getProfileImage,
  getCoverImage,
} from "../../profileCover/profileCover";

const Profile = () => {
  const [email, firstName, lastName, about, followers, followings] =
    protectRoute();
  const profileImageUrl = getProfileImage();
  const coverImageUrl = getCoverImage();

  return (
    <div className="profile-user mt-3 bg-gray-100 dark:bg-subMajorDark w-full rounded-2xl overflow-hidden pb-5">
      <div className="relative w-fit">
        {coverImageUrl && (
          <img
            className="w-[20rem] h-[6rem] object-cover"
            src={coverImageUrl}
            alt="the cover image"
          />
        )}
        {profileImageUrl && (
          <img
            className="object-cover w-20 h-20 rounded-full absolute top-10 left-1/2 transform -translate-x-1/2"
            src={profileImageUrl}
            alt="the profile image"
          />
        )}
      </div>
      <div className="ProfileName mt-6 flex flex-col items-center justify-center mb-4">
        <span className="dark:text-gray-200 text-gray-700 text-md font-semibold text-center">
          {firstName} {lastName}
        </span>
        <span className="dark:text-gray-200 text-gray-700 px-2 text-center">
          {about != "Tell us more about you 😃" && about}
        </span>
      </div>
      <hr className=" w-[85%] border  border-[#cfcdcd] mx-auto" />
      <div className="followStatus flex mt-2 mb-2 items-center justify-evenly">
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
      <hr className=" w-[85%] border  border-[#cfcdcd] mx-auto" />
      <div className="text-center mt-4 text-blue-500 text-lg font-semibold">
        <a href="/u/user">My Profile</a>
      </div>
    </div>
  );
};

export default Profile;