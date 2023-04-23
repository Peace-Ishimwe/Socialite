import Post from "../../post/post";
import React, { useEffect, useState } from 'react'
import axios from "axios";

const PostHome = () => {

  const [allPosts , setAllPosts] = useState()
  
  useEffect(() => {
    const getAllPosts = async() => {
      try {
        const posts = await axios.get("http://localhost:3000/v1/api/home/posts",{
          withCredentials: true,
        });
        if(posts){
          setAllPosts(posts.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getAllPosts()
  }, [])

  return (
    <div className="main-container w-11/12 sm:w-8/12 mx-auto mt-5 flex flex-col gap-10 pb-10">
      {
        allPosts && allPosts.map((post) => {
          return <Post likes = {25} date={post.date} title={post.data} firstName={post.firstName} lastName={post.lastName} src={post.post} key={post.post} />;
        })
      }
    </div>
  )
}

export default PostHome
