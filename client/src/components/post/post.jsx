import React from "react";

const Post = () => {
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
          <p className="text-[.90rem] font-medium">5h</p>
        </div>
      </div>

      <div className="p-5">
        India has been touring Australia since 1947, but all that changed after
        winning the first and third Tests in Adelaide and Melbourne,
        respectively.
      </div>

      <div>
        <img src="/Images/profile.jpeg" className="w-full mx-auto sm:h-fit sm:max-h-[60vh] h-[fit-content] object-cover" alt="" />
      </div>
      <div className="p-5 flex gap-10">
        <div>Like</div>
        <div>Comment</div>
      </div>
    </div>
  );
};

export default Post;
