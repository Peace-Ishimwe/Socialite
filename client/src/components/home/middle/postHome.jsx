import Post from "../../post/post";
import React, { useEffect, useState } from "react";
import axios from "axios";

const PostHome = () => {
  const [allPosts, setAllPosts] = useState();

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const posts = await axios.get(
          "http://localhost:3000/v1/api/home/posts",
          {
            withCredentials: true,
          }
        );
        if (posts) {
          setAllPosts(posts.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getAllPosts();
  }, []);

  return (
    <div className="main-container w-11/12 sm:w-8/12 mx-auto mt-5 flex flex-col gap-10 pb-10">
      {allPosts != null &&
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
              userId={post.userId}
              comments={post.comments}
              redirect={true}
            />
          );
        })}
    </div>
  );
};

export default PostHome;
