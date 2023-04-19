import Post from "../../post/post";
import React from 'react'

const PostHome = () => {
  return (
    <div className="main-container w-11/12 sm:w-8/12 mx-auto mt-5 flex flex-col gap-10 pb-10">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default PostHome