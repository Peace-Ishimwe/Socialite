import React, { useState } from "react";
import {
  CommentIcon,
  GlobeIcon,
  LikeIconChecked,
  LikeIconUnChecked,
} from "../../assets/icons/icons";
import axios from "axios";

const Post = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState(props.likes);
  const [id , setId]   = useState(props.id);

  

  const checkIfLiked = async(e) => {
    e.preventDefault();
    try {
      const { liked } = await axios.get(
        "http://localhost:3000/v1/api/u/post/checkIfLiked",
        { withCredentials: true }
      );
    } catch (err) {
      console.error(err);
    }
  }

  const handleLike = async () => {
    try {
      setIsLiked(!isLiked);
      setNumberOfLikes(numberOfLikes + 1);

      const { like } = await axios.put(
        "http://localhost:3000/v1/api/u/post/like",
        {id},
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
        {id},
        { withCredentials: true }
      );
    } catch (err) {
      console.log(err);
    }
  };

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
            </div>
          )}
          <div className="text-blue-500">46 Comments</div>
        </div>
        <hr className=" border  border-[#cfcdcd] " />
        <div className="flex justify-evenly">
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

          <button
            className="flex gap-5 lg:px-0 px-4  lg:w-3/12 items-center py-2 justify-center hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md "
            type="submit"
          >
            <CommentIcon />
            Comment
          </button>
        </div>
        <hr className=" border  border-[#cfcdcd] " />
      </div>
    </div>
  );
};

export default Post;
