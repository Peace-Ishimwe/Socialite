import React, { useEffect, useState } from 'react'
import Post from '../post/post'
import axios from "axios"

const UserPost = () => {

  const [userPost , setUserPost]  = useState([])
  const [userFirstName , setUserFirstName]  = useState()
  const [userLastName , setUserLastName]  = useState()

  useEffect(()=>{
    const fetchPost = async (e) => {
      // e.preventDefault();
      try {
        const { data } = await axios.get(
          "http://localhost:3000/v1/api/post",
          { withCredentials: true }
        );
        if (data) {
          setUserPost(data.postUser.reverse())
          setUserFirstName(data.firstName)
          setUserLastName(data.lastName)
        }
      } catch (ex) {
        console.log(ex);
      }
    };
    fetchPost()
  }, [])

  return (
    <div className='main-container flex flex-col gap-10 w-11/12 md:w-10/12 2xl:w-8/12 mx-auto mb-10'>
      {
        userPost.map((post)=>{
          return <Post firstName={userFirstName} lastName={userLastName} src={post} key={post} />;
        })
      }
    </div>
  )
}

export default UserPost