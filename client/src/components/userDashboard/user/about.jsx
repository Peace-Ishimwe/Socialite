import React, { useEffect, useState } from "react";
import { EmojiIconPicker } from "../../../assets/icons/icons";
import { CloseCirled } from "../../../assets/icons/icons";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Audio } from "react-loader-spinner";

const AboutUser = (props) => {
  // Handle the emoji picker and form
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
    <form
      className="lg:p-5 p-3 space-y-3 absolute w-11/12 top-[30%] sm:w-8/12 z-50 xl:w-6/12 left-[50%] h-[30vh] -translate-x-1/2 bg-white dark:bg-mainDark shadow-xl rounded-md"
      onSubmit={handleSubmitAboutUser}
    >
      <CloseCirled
        position="text-red-900 float-right h-8 w-8"
        action={props.click}
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
              <Picker theme={Theme} data={data} onEmojiSelect={onEmojiSelect} />
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center">
        {
          (loader == false && (
            <button
              type="submit"
              className="bg-blue-600 font-semibold p-2 mt-5 rounded-md text-center text-white w-6/12 "
            >
              Share
            </button>
          ))
        }
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
      <ToastContainer />
    </form>
  );
};

export default AboutUser;
