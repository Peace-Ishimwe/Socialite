import React from 'react'
import Post from '../post/post'

const UserPost = () => {
  return (
    <div className='main-container flex flex-col gap-10 w-11/12 md:w-10/12 2xl:w-8/12 mx-auto mb-10'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default UserPost