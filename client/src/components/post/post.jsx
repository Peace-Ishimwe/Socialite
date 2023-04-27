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
import { Link } from "react-router-dom";
import data from "@emoji-mart/data";
import protectRoute from "../auth/protectedRoutes";
import { Audio } from "react-loader-spinner";

const Post = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState(props.likes);
  const [id, setId] = useState(props.id);
  const [userId, setUserId] = useState(props.userId);
  const [Theme, setTheme] = useState("dark");
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [comments, setComments] = useState("");
  const [commentsVisible, setCommentsVisible] = useState("");

  const [postedComment, setPostedComment] = useState();
  const [isPostedCommentVisible, setIsPostedCommentVisible] = useState(false);

  const [email, firstName, lastName] = protectRoute();

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
    setCommentsVisible("");
  };

  const checkIfLiked = async (e) => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/v1/api/u/post/checkIfLiked",
        { withCredentials: true }
      );
      if (
        data &&
        (Array.isArray(data)
          ? data.includes(id)
          : Object.keys(data).includes(id))
      ) {
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

  const [isCommentSent, setIsCommentSent] = useState(true);

  const handleComments = async (e) => {
    e.preventDefault();
    setIsCommentSent(false);
    try {
      const { data } = await axios.post(
        "http://localhost:3000/v1/api/u/post/comment",
        { id, comments },
        { withCredentials: true }
      );
      setPostedComment(comments);
      setIsPostedCommentVisible(true);
      setComments("");
      props.comments.length += 1;
      setIsCommentSent(true);
    } catch (err) {
      console.log(err);
      setData("Something went wrong");
    }
    setComments("");
  };

  const now = new Date();
  const day = now.getDate();
  const month = now.toLocaleString("default", { month: "short" });
  const year = now.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;

  // image loader
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  function handleLoad() {
    setIsLoading(false);
  }

  function handleError() {
    setIsLoading(false);
    setHasError(true);
  }

  return (
    <div className="bg-white dark:bg-subMajorDark text-gray-900 dark:text-gray-200 rounded-md">
      {props.redirect === true && (
        <Link
          to={`/u/user/visit/${userId}`}
          className="flex gap-2 items-center p-5"
        >
          {props.profile && (
            <img
              className="rounded-full sm:w-[3.5rem] sm:h-[3.5rem] h-[2rem] w-[2rem] object-cover"
              src={props.profile}
              alt=""
            />
          )}
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
        </Link>
      )}

      {props.redirect === false && (
        <div className="flex gap-2 items-center p-5">
          <img
            className="rounded-full sm:w-[3.5rem] sm:h-[3.5rem] h-[2rem] w-[2rem] object-cover"
            src={props.profile}
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
      )}

      <div className="p-5">{props.title}</div>
      <div className="flex dark:text-white  text-gray-700 justify-center items-center">
        {isLoading && (
          <div className="flex justify-center items-center flex-col gap-2d">
            <Audio height="32" width="60" radius="9" ariaLabel="loading" />
            Loading image....
          </div>
        )}
        {hasError ? (
          <p>Unable to load image.</p>
        ) : (
          <img
            src={props.src}
            className="w-full mx-auto sm:h-fit max-h-[100vh] object-cover"
            onLoad={handleLoad}
            onError={handleError}
            style={{ display: isLoading || hasError ? "none" : "block" }}
          />
        )}
      </div>
      <div className=" px-5 pt-5 flex gap-3 font-medium flex-col">
        <div className="flex justify-between w-full">
          {numberOfLikes > 0 && (
            <div className="text-blue-500 font-medium flex gap-2">
              <LikeIconChecked />
              {numberOfLikes}
              {numberOfLikes > 1 && <span>Likes</span>}
              {numberOfLikes == 1 && <span>Like</span>}
            </div>
          )}
          <div className="text-blue-500 flex gap-1">
            <span>{props.comments.length > 0 && props.comments.length}</span>
            <span>
              {props.comments.length == 1 && "Comment"}
              {props.comments.length > 1 && "Comments"}
            </span>
          </div>
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
          <label
            className="flex gap-5 lg:px-0 px-4  lg:w-3/12 items-center py-2 justify-center hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md "
            type="submit"
          >
            <CommentIcon />
            Comment
          </label>
        </div>

        {/* {commentsVisible && ( */}
        <div
          className={` ${commentsVisible} w-full mx-auto h-[270px] relative overflow-hidden`}
        >
          <hr className=" border  border-[#cfcdcd]" />
          <h2 className="text-lg font-medium mb-4">Comments</h2>
          <form
            className="flex justify-between items-end pr-3 bg-white dark:bg-subMajorDark rounded-lg shadow pb-1"
            onSubmit={handleComments}
          >
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
                setCommentsVisible("h-[70vh]");
              }}
            >
              <EmojiIconPicker style="w-10 h-10" />
            </div>
            <div>
              {isCommentSent && (
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-md py-1 px-4 bg-"
                >
                  <RocketIcon />
                </button>
              )}
              {isCommentSent === false && (
                <button
                  type="button"
                  className="bg-blue-500 text-white rounded-md py-1 px-4 bg-"
                >
                  <Audio
                    height="24"
                    width="24"
                    radius="9"
                    color="white"
                    ariaLabel="loading"
                  />
                </button>
              )}
            </div>
          </form>
          {isPickerVisible && (
            <div className=" mt-3 relative overflow-visible">
              <Picker theme={Theme} data={data} onEmojiSelect={onEmojiSelect} />
            </div>
          )}
          {isPostedCommentVisible && (
            <div className="bg-white dark:bg-subMainDark shadow-md rounded-lg p-4 mt-4">
              <div className="flex items-start">
                <img
                  className="w-8 h-8 rounded-full mr-2"
                  src="https://i.pravatar.cc/150?img=10"
                  alt="User avatar"
                />
                <div className="flex-1">
                  <h3 className="text-gray-900 dark:text-gray-200 font-medium mb-1">
                    {firstName} {lastName}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {postedComment}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 text-sm">{formattedDate}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {props.comments &&
            props.comments.map((comment) => {
              return (
                <div
                  key={comment.comments}
                  className="bg-white dark:bg-subMainDark shadow-md rounded-lg px-4 py-2 mt-6 mb-6"
                >
                  <div className="flex items-start mb-4">
                    <Link to={`/u/user/visit/${comment.commenterId}`}>
                      <img
                        className="w-8 h-8 rounded-full mr-2"
                        src="https://i.pravatar.cc/150?img=10"
                        alt="User avatar"
                      />
                    </Link>
                    <div className="flex-1">
                      <Link to={`/u/user/visit/${comment.commenterId}`}>
                        {" "}
                        <h3 className="text-gray-900 dark:text-gray-200 font-medium mb-1">
                          {comment.firstName} {comment.lastName}
                        </h3>
                      </Link>

                      <p className="text-gray-600 dark:text-gray-400">
                        {comment.comments}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-500 text-sm">
                          {comment.formattedDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          {props.comments.length != 0 && (
            <div
              onClick={() => {
                setCommentsVisible("");
              }}
              className="relative mb-3 mt-2 text-blue-500 hover:underline cursor-pointer"
            >
              See less
            </div>
          )}
          {props.comments.length != 0 && commentsVisible == "" && (
            <div
              onClick={() => {
                setCommentsVisible("h-fit");
              }}
              className="absolute bottom-0 bg-white p-1 dark:bg-subMajorDark w-full text-blue-500 hover:underline cursor-pointer"
            >
              View all comments
            </div>
          )}
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Post;
