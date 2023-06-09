import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  const [userInfo, setUserInfo] = useState();
  const [userAbout, setUserAbout] = useState();
  const [profileImage, setProfileImage] = useState();
  const [coverImage, setCoverImage] = useState();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_PORT}/v1/api/u/user/info/visit/${userId}`,
          {},
          { withCredentials: true }
        );
        if (response && response.data) {
          setUserInfo(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    
    const getUserProfileCover = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_PORT}/v1/api/u/user/profileCover/visit/${userId}`,
          {},
          { withCredentials: true }
        );
        if (response && response.data) {
          setProfileImage(response.data.profileImageUrl);
          setCoverImage(response.data.coverImageUrl);
        }
      } catch (err) {
        console.error(err);
      }
    };
    const getUserAbout = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_PORT}/v1/api/u/user/about/visit/${userId}`,
          {},
          { withCredentials: true }
        );
        if (response && response.data) {
          setUserAbout(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getUserAbout();
    getUserInfo();
    getUserProfileCover()
  }, [userId]);

  return (
    <div className="main-container w-11/12 md:w-10/12 2xl:w-8/12 mx-auto mt-10 relative text-gray-700 dark:text-gray-200">
      <div className="relative w-full h-fit dark:bg-subMajorDark bg-white rounded-t-3xl pb-5">
        <div className="relative">
          {coverImage != null && (
            <img
              className="w-full h-[20vh] min-[460px]:h-[30vh] sm:h-[40vh] object-cover rounded-t-3xl"
              src={coverImage}
              alt="the cover image"
            />
          )}
        </div>
        <div className="relative h-2 flex justify-center">
          {profileImage != null && (
            <img
              className="object-cover w-36 h-36 rounded-full absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 border-white border-[5px]"
              src={profileImage}
              alt="the profile image"
            />
          )}
        </div>
        <div className="mt-10 flex flex-col gap-1 text-center">
          <div className="names mt-16 sm:mt-5 mb-1 text-xl font-semibold">
            {userInfo != null && (
              <p>
                {userInfo.firstName} {userInfo.lastName}
              </p>
            )}
          </div>
          <div>
            {userAbout != null && userAbout != "Tell us more about you 😃" && (
              <p>{userAbout}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
