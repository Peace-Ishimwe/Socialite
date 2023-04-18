import React, { useState, useRef } from "react";
import ProfileImage from "../../../assets/Images/profile.jpeg";
import { CloseCirled , ImageIcon , RocketIcon } from "../../../assets/icons/icons";


const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="flex gap-5 bg-white dark:bg-subMajorDark p-3 sm:p-5 rounded-[1rem] min-w-fit w-11/12 sm:w-9/12 mx-auto mt-10 ">
      <img className="rounded-full sm:w-[3rem] sm:h-[3rem] h-[2rem] w-[2rem] object-cover" src={ProfileImage} alt="" />
      <div className="flex flex-col w-[90%] sm:gap-5 gap-2 ">
        <input className="bg-[#28343e12] dark:bg-gray-200 rounded-[10px] p-[6px] sm:p-[10px]  text-sm sm:text-[17px] border-none outline-none" type="text" placeholder="What's happening" />
        <div className="flex justify-between items-center">
          <div className="option text-blue-500 flex  flex-col items-center"
          onClick={()=>imageRef.current.click()}
          >
            <ImageIcon style={"text-blue-600"} />
            Photo
          </div>
          <button type="submit" className="button bg-blue-500 self-center px-5 py-2 text-white rounded-md flex gap-1 font-semibold">Share <RocketIcon /> </button>
          <div>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
              className="hidden"
            />
          </div>
        </div>
      {image && (

        <div className="previewImage w-full flex items-center justify-center flex-col relative">
          <CloseCirled position={'absolute top-2 right-2 text-red-500 w-9 h-9'} action={()=>setImage(null)}/>
          <img className=" max-h-[16rem] md:max-h-[24rem] w-[100%] object-cover rounded-[0.5rem]" src={image.image} alt="" />
        </div>

      )}

      </div>
    </div>
  );
};

export default PostShare;