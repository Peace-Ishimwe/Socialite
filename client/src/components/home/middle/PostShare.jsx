import React, { useState, useRef } from "react";
import ProfileImage from "../../../assets/Images/profile.jpeg";
import {
  CloseCirled,
  ImageIcon,
  RocketIcon,
} from "../../../assets/icons/icons";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Audio } from "react-loader-spinner";
import { getProfileImage } from "../../profileCover/profileCover";

const PostShare = (props) => {
  const profileImageUrl = getProfileImage();
  //toast
  const generateSuccess = (success) =>
    toast.success(success, {
      position: "top-center",
    });
  const generateError = (success) =>
    toast.error(success, {
      position: "top-center",
    });

  const imageRef = useRef();
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [loader, setLoader] = useState(false);
  const [dataPost, setDataPost] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_PORT}/v1/api/upload/post`,
        {
          previewSource,
          dataPost,
          cover: props.cover,
          profile: props.profile,
        },
        {
          withCredentials: true,
        }
      );
      if (data.message) {
        generateSuccess(data.message);
        setLoader(false);
      } else {
        generateError(data.error);
        setLoader(false);
      }
      setFileInputState("");
      setPreviewSource("");
      setDataPost("");
      setSelectedFile("");
    } catch (err) {
      generateError(err.response.statusText);
      setPreviewSource("");
      setDataPost("");
      setFileInputState("");
      setSelectedFile("");
      setLoader(false);
      console.error(err);
    }
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      generateError("Please select a file");
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    setLoader(true);
    reader.onerror = () => {
      console.error("AHHHHHHHH!!");
      generateError("something went wrong!");
    };
  };

  return (
    <form
      onSubmit={handleSubmitFile}
      className="flex gap-5 bg-white dark:bg-subMajorDark p-3 sm:p-5 rounded-[1rem] min-w-fit w-11/12 sm:w-8/12 mx-auto mt-10 "
    >
      {profileImageUrl && (
        <img
          className="rounded-full sm:w-[3rem] sm:h-[3rem] h-[2rem] w-[2rem] object-cover"
          src={profileImageUrl}
          alt=""
        />
      )}
      <div className="flex flex-col w-[90%] sm:gap-5 gap-2 ">
        <input
          className="bg-[#28343e12] dark:bg-gray-200 rounded-[10px] p-[6px] sm:p-[10px]  text-sm sm:text-[17px] border-none outline-none"
          type="text"
          placeholder="What's happening"
          onChange={(e) => setDataPost(e.target.value)}
          value={dataPost}
        />
        <div className="flex justify-between items-center">
          <div
            className="option text-blue-500 flex  flex-col items-center"
            onClick={() => imageRef.current.click()}
          >
            <ImageIcon style={"text-blue-600"} />
            Photo
          </div>
          {loader == false && (
            <button
              type="submit"
              className="button bg-blue-500 self-center px-5 py-2 text-white rounded-md flex gap-1 font-semibold"
            >
              Share <RocketIcon />
            </button>
          )}
          {loader == true && (
            <button className="button bg-blue-500 self-center px-5 py-2 text-white rounded-md flex gap-1 font-semibold">
              <Audio
                height="24"
                width="60"
                radius="9"
                color="white"
                ariaLabel="loading"
              />
            </button>
          )}
          <div>
            <input
              type="file"
              name="image"
              ref={imageRef}
              onChange={handleFileInputChange}
              value={fileInputState}
              className="hidden"
            />
          </div>
        </div>
        {previewSource && (
          <div className="previewImage w-full flex items-center justify-center flex-col relative">
            <CloseCirled
              position={"absolute top-2 right-2 text-red-500 w-9 h-9"}
              action={() => setPreviewSource("")}
            />
            <img
              className=" max-h-[16rem] md:max-h-[24rem] w-[100%] object-cover rounded-[0.5rem]"
              src={previewSource}
              alt=""
            />
          </div>
        )}
      </div>
      <ToastContainer />
    </form>
  );
};

export default PostShare;
