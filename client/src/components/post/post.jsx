import React, { useState } from "react";
import { CommentIcon , GlobeIcon, LikeIconChecked, LikeIconUnChecked } from "../../assets/icons/icons";

const Post = () => {

  const [isliked , setIsliked] = useState(false)
  const [textColor , setTextColor] = useState('')
  const handleLike = () => {
    setIsliked(!isliked)
    if(textColor === ''){
      setTextColor('text-blue-500')
    }else{
      setTextColor("")
    }
  }

  return (
    <div className="bg-white dark:bg-subMajorDark text-gray-900 dark:text-gray-200 rounded-md">
      <div className="flex gap-2 items-center p-5">
        <img
          className="rounded-full sm:w-[3.5rem] sm:h-[3.5rem] h-[2rem] w-[2rem] object-cover"
          src="/Images/profile.jpeg"
          alt=""
        />
        <div>
          <p className="font-medium">Indian Cricket Team</p>
          <p className="text-[.90rem] font-medium flex gap-1">5h. <GlobeIcon style={"h-[18px] w-[18px] text-gray-900 dark:text-gray-200"} /></p>
        </div>
      </div>

      <div className="p-5">
        India has been touring Australia since 1947, but all that changed after
        winning the first and third Tests in Adelaide and Melbourne,
        respectively.
      </div>

      <div>
        <img
          src="/Images/indianTeam.png"
          className="w-full mx-auto sm:h-fit sm:max-h-[70vh] h-[fit-content] object-cover"
          alt=""
        />
      </div>
      <div className="p-5 flex gap-3 font-medium flex-col">
        <div className="flex justify-between w-full">
          <div className="text-blue-500 font-medium flex gap-2">
            <LikeIconChecked />
            324 likes
          </div>
          <div className="text-blue-500">46 Comments</div>
        </div>
        <hr className=" border  border-[#cfcdcd] " />
        <div className="flex justify-evenly">
          <button onClick={handleLike} className={`${textColor} flex gap-5 lg:px-0 px-4  lg:w-3/12 items-center py-2 justify-center hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md`} type="submit">
            {isliked && <LikeIconChecked style='text-blue-500' />}
            {isliked == false && <LikeIconUnChecked />}
            Like
          </button>
          <button className="flex gap-5 lg:px-0 px-4  lg:w-3/12 items-center py-2 justify-center hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md " type="submit">
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
