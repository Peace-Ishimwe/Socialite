import React, { useState, useRef, useEffect } from "react";
import {
  PencilIcon,
  CameraIcon,
  CloseCirled,
  RocketIcon,
} from "../../assets/icons/icons";
import protectRoute from "../auth/protectedRoutes";
import { EmojiIconPicker } from "../../assets/icons/icons";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Audio } from "react-loader-spinner";
import PostShare from "../home/middle/PostShare";
import {getProfileImage , getCoverImage} from "../profileCover/profileCover";

const User = () => {
  const [
    email,
    firstName,
    lastName,
    aboutUserInfo,
    followers,
    followings,
    gender,
    telephone,
  ] = protectRoute();
  const [showAboutFronted, setShowAboutFronted] = useState(false);
  const [valueFronted, setValueFronted] = useState();
  // Handle the profile image change
  const [profileImage, setProfileImage] = useState(false);
  const profileImageUrl = getProfileImage();
  // Handle the cover image change
  const [coverImage, setCoverImage] = useState(false);
  const coverImageUrl = getCoverImage();


  // Handle the emoji picker and form
  const [aboutForm, setAboutForm] = useState(false);

  // handle the aboutUser
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [Theme, setTheme] = useState("dark");
  const [loader, setLoader] = useState(false);

  const [aboutUser, setAboutUser] = useState("");

  const onEmojiSelect = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setAboutUser(aboutUser + emoji);
    setIsPickerVisible(!isPickerVisible);
  };

  useEffect(() => {
    if (localStorage.theme === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  // integration with the backend About user
  const handleSubmitAboutUser = async (event) => {
    event.preventDefault();
    try {
      setLoader(true);
      const { data } = await axios.post(
        "http://localhost:3000/v1/api/aboutUser",
        {
          aboutUser,
        },
        {
          withCredentials: true,
        }
      );
      if (data) {
        generateSuccess(data.message);
        setAboutUser("");
        setLoader(false);
        setAboutForm(!aboutForm);
        setShowAboutFronted(!showAboutFronted);
        setValueFronted(aboutUser);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const generateSuccess = (success) =>
    toast.success(success, {
      position: "top-center",
    });

  return (
    <div className="main-container w-11/12 md:w-10/12 2xl:w-8/12 mx-auto mt-10 relative">
      <div className="relative w-full h-fit dark:bg-subMajorDark bg-white rounded-t-3xl">
        <div className="relative">
          <img
            className="w-full h-[20vh] min-[460px]:h-[30vh] sm:h-[40vh] object-cover rounded-t-3xl"
            src={coverImageUrl}
            alt="the cover image"
          />
          <div className="absolute w-11/12 top-2 left-2 z-30 shadow-2xl">
            <div
              onClick={() => {
                setCoverImage(!coverImage);
              }}
            >
              <div className="bg-gray-200 p-1 w-fit rounded-md cursor-pointer">
                <CameraIcon />
              </div>
            </div>
            {coverImage && (
              <div className="flex">
                <span className="absolute right-1/2 ">
                  <CloseCirled
                    action={() => {
                      setCoverImage(!coverImage);
                    }}
                    position="h-[2rem] w-[2rem] text-red-300 cursor-pointer"
                  />
                </span>
                <PostShare cover={true} />
              </div>
            )}
          </div>
        </div>
        <div className="relative h-2 flex justify-center">
          <img
            className="object-cover w-36 h-36 rounded-full absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 border-white border-[5px]"
            src={profileImageUrl}
            alt="the profile image"
          />
          <div className="absolute w-11/12 top-2 left-2 z-30 shadow-2xl">
            <div
              className="left-[60%] absolute"
              onClick={() => {
                setProfileImage(!profileImage);
              }}
            >
              <div className="bg-gray-200 p-1 rounded-md cursor-pointer">
                <CameraIcon />
              </div>
            </div>
            <div className="w-full absolute top-[-240px] sm:top-[-340px]">
              {profileImage && (
                <div className="flex">
                  <span className="absolute right-1/2 ">
                    <CloseCirled
                      action={() => {
                        setProfileImage(!profileImage);
                      }}
                      position="h-[2rem] cursor-pointer w-[2rem] text-red-300"
                    />
                  </span>
                  <PostShare profile={true} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-subMajorDark py-10 text-gray-700 dark:text-gray-200 text-lg font-medium flex-col flex items-center justify-center rounded-b-lg px-2 sm:px-7">
        <div className="names mt-16 sm:mt-5 mb-1 text-xl font-semibold">
          {firstName} {lastName}
        </div>
        <div className="flex gap-2 sm:gap-6 items-center">
          <div className="more-about-you text-center">
            {showAboutFronted == false && aboutUserInfo}
            {showAboutFronted && valueFronted}
          </div>
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
      {aboutForm && (
        <form
          className="lg:p-5 p-3 space-y-3 absolute w-11/12 top-[30%] sm:w-8/12 z-50 xl:w-6/12 left-[50%] h-[30vh] -translate-x-1/2 bg-white dark:bg-mainDark shadow-xl rounded-md"
          onSubmit={handleSubmitAboutUser}
        >
          <CloseCirled
            position="text-red-900 float-right h-8 w-8"
            action={() => {
              setAboutForm(!aboutForm);
            }}
          />
          <div className="p-5">
            <label className="mb-0 text-gray-700 dark:text-gray-200 ">
              {" "}
              Tell us more about your self{" "}
            </label>
            <div className="text-gray-700 dark:text-gray-200 flex items-center border-b-2 border-gray-700 dark:border-gray-200">
              <input
                className=" h-12 mt-2 px-3 w-full  outline-none bg-white dark:bg-mainDark"
                name="aboutUser"
                id="aboutUser"
                value={aboutUser}
                onChange={(e) => setAboutUser(e.target.value)}
                min={15}
                max={255}
                required
              />
              <div
                className="w-fit cursor-pointer"
                onClick={() => {
                  setIsPickerVisible(!isPickerVisible);
                }}
              >
                <EmojiIconPicker />
              </div>
            </div>
            {isPickerVisible && (
              <div className="relative mt-3">
                <div className="absolute top-3/4">
                  <Picker
                    theme={Theme}
                    data={data}
                    onEmojiSelect={onEmojiSelect}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-center items-center">
            {loader == false && (
              <button
                type="submit"
                className="bg-blue-600 font-semibold p-2 mt-5 rounded-md text-center text-white w-6/12 "
              >
                Share
              </button>
            )}
            {loader && (
              <button
                type="button"
                className="bg-blue-600 font-semibold p-1 mt-5 rounded-md flex justify-center items-center text-white w-6/12 "
              >
                <Audio
                  height="24"
                  width="60"
                  radius="9"
                  color="white"
                  ariaLabel="loading"
                />
                <span className="pt-2">Loadin..</span>
              </button>
            )}
          </div>
        </form>
      )}
      <ToastContainer />
    </div>
  );
};

export default User;
