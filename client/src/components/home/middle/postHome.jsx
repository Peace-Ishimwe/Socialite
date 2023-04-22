import Post from "../../post/post";
import React, { useEffect, useState } from 'react'
import axios from "axios";

const PostHome = () => {

  return (
    <div className="main-container w-11/12 sm:w-8/12 mx-auto mt-5 flex flex-col gap-10 pb-10">
        <Post />
    </div>
  )
}

export default PostHome