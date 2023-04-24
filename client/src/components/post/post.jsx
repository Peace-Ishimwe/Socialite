import React, { useEffect, useState } from "react";
import {
  CommentIcon,
  GlobeIcon,
  LikeIconChecked,
  LikeIconUnChecked,
  RocketIcon,
  EmojiIconPicker,
} from "../../assets/icons/icons";
import axios from "axios";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const Post = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState(props.likes);
  const [id, setId] = useState(props.id);
  const [Theme, setTheme] = useState("dark");
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const [comments, setComments] = useState("");

  useEffect(() => {
    if (localStorage.theme === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  const onEmojiSelect = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setComments(comments + emoji);
    setIsPickerVisible(!isPickerVisible);
  };

  const checkIfLiked = async (e) => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/v1/api/u/post/checkIfLiked",
        { withCredentials: true }
      );
      if (data.includes(id)) {
        setIsLiked(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    checkIfLiked();
  }, []);

  const handleLike = async () => {
    try {
      setIsLiked(!isLiked);
      setNumberOfLikes(numberOfLikes + 1);

      const { like } = await axios.put(
        "http://localhost:3000/v1/api/u/post/like",
        { id },
        { withCredentials: true }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnLike = () => {
    try {
      setIsLiked(!isLiked);
      setNumberOfLikes(numberOfLikes - 1);

      const { unLike } = axios.put(
        "http://localhost:3000/v1/api/u/post/unLike",
        { id },
        { withCredentials: true }
      );
    } catch (err) {
      console.log(err);
    }
  };


  // comments here

  return (
    <div className="bg-white dark:bg-subMajorDark text-gray-900 dark:text-gray-200 rounded-md">
      <div className="flex gap-2 items-center p-5">
        <img
          className="rounded-full sm:w-[3.5rem] sm:h-[3.5rem] h-[2rem] w-[2rem] object-cover"
          src="/Images/profile.jpeg"
          alt=""
        />
        <div>
          <p className="font-medium flex gap-1">
            <span>{props.firstName}</span> <span>{props.lastName}</span>
          </p>
          <p className="text-[.90rem] font-medium flex gap-1">
            {props.date}.{" "}
            <GlobeIcon
              style={"h-[18px] w-[18px] text-gray-900 dark:text-gray-200"}
            />
          </p>
        </div>
      </div>

      <div className="p-5">{props.title}</div>
      <div>
        <img
          src={props.src}
          className="w-full mx-auto sm:h-fit h-[fit-content] object-cover"
          alt=""
        />
      </div>
      <div className="p-5 flex gap-3 font-medium flex-col">
        <div className="flex justify-between w-full">
          {numberOfLikes > 0 && (
            <div className="text-blue-500 font-medium flex gap-2">
              <LikeIconChecked />
              {numberOfLikes}
              {numberOfLikes > 1 && <span>Likes</span>}
              {numberOfLikes == 1 && <span>Like</span>}
            </div>
          )}
          <div className="text-blue-500">46 Comments</div>
        </div>
        <hr className=" border  border-[#cfcdcd] " />
        <div className="flex justify-evenly">
          {/* Like and unlike a post */}
          {!isLiked && (
            <button
              className={`gap-5 lg:px-0 px-4 flex  lg:w-3/12 items-center py-2 justify-center hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md`}
              type="submit"
              onClick={handleLike}
            >
              <LikeIconUnChecked />
            </button>
          )}
          {isLiked && (
            <button
              className={`gap-5 lg:px-0 px-4 flex text-blue-500 lg:w-3/12 items-center py-2 justify-center hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md`}
              type="submit"
              onClick={handleUnLike}
            >
              <LikeIconChecked />
            </button>
          )}

          {/* Comment on the post */}
          <button
            className="flex gap-5 lg:px-0 px-4  lg:w-3/12 items-center py-2 justify-center hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md "
            type="submit"
          >
            <CommentIcon />
            Comment
          </button>
        </div>
        <hr className=" border  border-[#cfcdcd]" />
        <div className="w-full mx-auto">
          <h2 className="text-lg font-medium mb-4">Comments</h2>
          <div className="flex justify-between items-end pr-3 bg-white dark:bg-subMajorDark rounded-lg shadow pb-1">
            <div className="w-10/12">
              <textarea
                className="textarea text-gray-700 dark:text-gray-200 bg-white dark:bg-subMajorDark block w-full py-2 p-2 outline-none overflow-hidden resize min-h-[40px] leading-[20px]"
                id="comments"
                name="comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Write comments"
                required
              />
            </div>
            <div
              className="text-blue-500 cursor-pointer"
              onClick={() => {
                setIsPickerVisible(!isPickerVisible);
              }}
            >
              <EmojiIconPicker style="w-10 h-10" />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md py-1 px-4 bg-"
              >
                <RocketIcon />
              </button>
            </div>
          </div>
          {isPickerVisible && (
            <div className="relative mt-3">
                <Picker
                  theme={Theme}
                  data={data}
                  onEmojiSelect={onEmojiSelect}
                />
            </div>
          )}
          <div className="bg-white dark:bg-subMainDark shadow-md rounded-lg p-4 mt-4">
            <div className="flex items-start mb-4">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src="https://i.pravatar.cc/150?img=10"
                alt="User avatar"
              />
              <div className="flex-1">
                <h3 className="text-gray-900 dark:text-gray-200 font-medium mb-1">
                  John Doe
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  finibus eleifend felis, at tincidunt quam congue id. Fusce id
                  ex nec eros bibendum lacinia.
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 text-sm">10 minutes ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
