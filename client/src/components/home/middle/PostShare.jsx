import React, { useState, useRef } from "react";
import ProfileImage from "../../../assets/Images/profile.jpeg";
import {CloseCirled,ImageIcon,RocketIcon} from "../../../assets/icons/icons";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const PostShare = () => {
  //toast
  const generateSuccess= (success) =>
  toast.success(success, {
    position: "top-center",
  });
  const generateError= (success) =>
  toast.success(success, {
    position: "top-center",
  });

  const imageRef = useRef();
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

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
        "http://localhost:3000/v1/api/upload/post",
        {
         previewSource
        },{
          withCredentials: true
        }
      )
      if(data.message) {
        generateSuccess(data.message);
      }else{
        generateError(data.error)
      }
      ;
      setFileInputState("");
      setPreviewSource("");
      setSuccessMsg("Image uploaded successfully");
    } catch (err) {
      console.error(err);
      setErrMsg("Something went wrong!");
    }
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.error("AHHHHHHHH!!");
      setErrMsg("something went wrong!");
    };
  };

  return (
    <form
      onSubmit={handleSubmitFile}
      className="flex gap-5 bg-white dark:bg-subMajorDark p-3 sm:p-5 rounded-[1rem] min-w-fit w-11/12 sm:w-8/12 mx-auto mt-10 "
    >
      <img
        className="rounded-full sm:w-[3rem] sm:h-[3rem] h-[2rem] w-[2rem] object-cover"
        src={ProfileImage}
        alt=""
      />
      <div className="flex flex-col w-[90%] sm:gap-5 gap-2 ">
        <input
          className="bg-[#28343e12] dark:bg-gray-200 rounded-[10px] p-[6px] sm:p-[10px]  text-sm sm:text-[17px] border-none outline-none"
          type="text"
          placeholder="What's happening"
        />
        <div className="flex justify-between items-center">
          <div
            className="option text-blue-500 flex  flex-col items-center"
            onClick={() => imageRef.current.click()}
          >
            <ImageIcon style={"text-blue-600"} />
            Photo
          </div>
          <button
            type="submit"
            className="button bg-blue-500 self-center px-5 py-2 text-white rounded-md flex gap-1 font-semibold"
          >
            Share <RocketIcon />{" "}
          </button>
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
              action={() => setPreviewSource(null)}
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
