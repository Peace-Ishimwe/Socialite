import React, { useEffect, useState } from "react";
import { EmojiIconPicker } from "../../../assets/icons/icons";
import { CloseCirled } from "../../../assets/icons/icons";
import Picker from "emoji-picker-react";

const AboutUser = (props) => {
  // Handle the emoji picker and form
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [Theme, setTheme] = useState("dark");
  const [innerWidth, setInnerWidth] = useState()
  const [width, setWidth] = useState()

  const [inputStr, setInputStr] = useState("");

  const onEmojiClick = (event, emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setIsPickerVisible(false);
  };

  window.addEventListener("resize", () => {
    setInnerWidth(window.innerWidth)
  })

  useEffect(()=>{
    if(innerWidth < 640){
        setWidth(240)
    }else if(innerWidth < 400){
        setWidth(180)
    }
  }, [window.onresize])

  useEffect(() => {
    if (localStorage.theme === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  return (
    <form className="lg:p-5 p-3 space-y-3 absolute w-11/12 top-[30%] sm:w-8/12 z-50 xl:w-6/12 left-[50%] h-[30vh] -translate-x-1/2 bg-white dark:bg-mainDark shadow-xl rounded-md">
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
            value={inputStr}
            onChange={(e) => setInputStr(e.target.value)}
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
              <Picker theme={Theme} width={width} onEmojiClick={onEmojiClick} />
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center">
        <button
          type="button"
          className="bg-blue-600 font-semibold p-2 mt-5 rounded-md text-center text-white w-6/12 "
        >
          Share
        </button>
      </div>
    </form>
  );
};

export default AboutUser;
