import Post from "../post/post";
import React, { useEffect, useState } from "react";
import axios, { all } from "axios";
import PostShare from "../home/middle/PostShare";
import { useParams } from "react-router-dom";

const userPost = () => {
  const [allPosts, setAllPosts] = useState();
  const { userId } = useParams();

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const posts = await axios.post(
          `http://localhost:3000/v1/api/u/user/post/visit/${userId}`,
          {},
          {
            withCredentials: true,
          }
        );
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
              lastName={ post.lastName}
              src={post.post}
              key={post.post}
              comments={post.comments}
              redirect={false}
            />
          );
        })}
    </div>
  );
};

export default userPost;
