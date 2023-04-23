import Post from "../post/post";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PostShare from "../home/middle/PostShare";

const userPost = () => {
  const [allPosts, setAllPosts] = useState();
  const [noPost, setNoPost] = useState();

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const posts = await axios.get("http://localhost:3000/v1/api/u/post", {
          withCredentials: true,
        });
        if (!posts.data.message) {
          setAllPosts(posts.data);
        } else {
          setNoPost(posts.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getAllPosts();
  }, []);

  return (
    <div className="main-container flex flex-col gap-10 w-11/12 md:w-10/12 2xl:w-8/12 mx-auto mb-10">
      {allPosts &&
        allPosts.map((post) => {
          return (
            <Post
              id={post.id}
              likes={post.likes.length}
              date={post.date}
              title={post.data}
              firstName={post.firstName}
              lastName={post.lastName}
              src={post.post}
              key={post.post}
            />
          );
        })}

      {noPost && (
        <div className=" dark:bg-subMajorDark bg-white p-5 ">
          <div className="w-full text-center mt-5 text-xl font-medium dark:text-gray-200 text-gray-700">
            {noPost}
            <span className="block">Post Some</span>
          </div>
          <PostShare />
        </div>
      )}
    </div>
  );
};

export default userPost;
