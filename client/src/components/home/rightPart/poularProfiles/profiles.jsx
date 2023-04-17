import React from 'react'
import ProfileImage from "../../../../assets/Images/profile.jpeg";

const Profiles = (props) => {
  return (
    <div className='flex items-center gap-2 text-xl text-gray-700 dark:text-gray-200'>
        <img className='object-cover rounded-full w-10 h-10' src={ProfileImage} alt="profiles" />
        <div>{props.followers} followers</div>
    </div>
  )
}

export default Profiles