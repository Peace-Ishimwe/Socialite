import React, { useState, useRef } from "react";
import {
  PencilIcon,
  CameraIcon,
  CloseCirled,
  RocketIcon,
} from "../../assets/icons/icons";
import protectRoute from "../auth/protectedRoutes";
import AboutUser from "./user/about";


const User = () => {
  const [email, firstName, lastName, aboutUser] = protectRoute();

  // Handle the profile image change

  const [imageProfile, setImageProfile] = useState(null);
  const imageRefProfile = useRef();

  const onProfileImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImageProfile({
        image: URL.createObjectURL(img),
      });
    }
  };

  // Handle the cover image change

  const [imageCover, setImageCover] = useState(null);
  const imageRefCover = useRef();

  const onCoverImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImageCover({
        image: URL.createObjectURL(img),
      });
    }
  };

  // Handle the emoji picker and form
  const [aboutForm, setAboutForm] = useState(false);

  return (
    <div className="main-container w-11/12 md:w-10/12 2xl:w-8/12 mx-auto mt-10 relative">
      <div className="relative w-full h-fit dark:bg-subMajorDark bg-white rounded-t-3xl">
        <div className="relative">
          <img
            className="w-full h-[20vh] min-[460px]:h-[30vh] sm:h-[40vh] object-cover rounded-t-3xl"
            src="/Images/profile.jpeg"
            alt="the cover image"
          />
          <div>
            <div
              onClick={() => {
                imageRefCover.current.click();
              }}
            >
              <CameraIcon style="text-gray-700 dark:text-gray-200 h-8 w-8 absolute top-2 right-2" />
            </div>
            <input
              type="file"
              name="cover"
              id="cover"
              className="hidden"
              ref={imageRefCover}
              onChange={onCoverImageChange}
            />
          </div>
        </div>
        <div className="relative h-2 flex justify-center">
          <img
            className="object-cover w-36 h-36 rounded-full absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 border-white border-[5px]"
            src="/Images/profile.jpeg"
            alt="the profile image"
          />
          <div className="p-2 bg-yellow-500 border-[3px] box-border border-white rounded-full w-fit ml-[10.5rem] z-50"></div>
          <div>
            <div
              onClick={() => {
                imageRefProfile.current.click();
              }}
            >
              <CameraIcon style="text-gray-700 dark:text-gray-200 h-8 w-8 ml-[2rem]  z-50" />
            </div>
            <input
              type="file"
              name="profile"
              id="profile"
              className="hidden"
              ref={imageRefProfile}
              onChange={onProfileImageChange}
            />
          </div>
          {/* Display the profile image */}
          {imageProfile && (
            <div className="previewImage w-full absolute bg-whiteflex items-center justify-center flex-col mt-16  bg-white dark:bg-subMajorDark py-5  shadow-xl flex">
              <CloseCirled
                position={"absolute top-2 right-2 text-red-500 w-9 h-9"}
                action={() => setImageProfile(null)}
              />
              <img
                className="w-fit h-fit max-h-[30vh] mx-auto object-cover rounded-[0.5rem]"
                src={imageProfile.image}
                alt=""
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 rounded-md text-gray-200 text-lg font-normal flex items-center gap-3 mt-5"
              >
                Post <RocketIcon />{" "}
              </button>
            </div>
          )}
          {/* Display the cover image */}
          {imageCover && (
            <div className="previewImage w-full absolute bg-whiteflex items-center justify-center flex-col mt-16  bg-white dark:bg-subMajorDark py-5  shadow-xl flex">
              <CloseCirled
                position={"absolute top-2 right-2 text-red-500 w-9 h-9"}
                action={() => setImageCover(null)}
              />
              <img
                className="w-fit h-fit max-h-[30vh] mx-auto object-cover rounded-[0.5rem]"
                src={imageCover.image}
                alt=""
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 rounded-md text-gray-200 text-lg font-normal flex items-center gap-3 mt-5"
              >
                Post <RocketIcon />{" "}
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="bg-white dark:bg-subMajorDark py-10 text-gray-700 dark:text-gray-200 text-lg font-medium flex-col flex items-center justify-center rounded-b-lg px-2 sm:px-7">
        <div className="names mt-16 sm:mt-5 mb-1 text-xl font-semibold">
          {firstName} {lastName}
        </div>
        <div className="flex gap-2 sm:gap-6 items-center">
          <div className="more-about-you text-center">{aboutUser}</div>
          <button
            type="submit"
            className="hover:bg-gray-300 p-2 rounded-md dark:hover:bg-gray-500 transition-all duration-1000"
            onClick={() => {
              setAboutForm(!aboutForm);
            }}
          >
            <PencilIcon />
          </button>
        </div>
      </div>
      {aboutForm &&
       <AboutUser click={() => {
        setAboutForm(!aboutForm);
      }} />
      }
    </div>
  );
};

export default User;
