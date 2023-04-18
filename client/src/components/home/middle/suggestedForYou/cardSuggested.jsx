import React from 'react'
import ProfileImage from "../../../../assets/Images/profile.jpeg";


const CardSuggested = (props) => {
  return (
    <div className='rounded-xl overflow-hidden w-fit min-w-fit flex flex-col bg-white dark:bg-subMajorDark box-border'>
        <img className='w-[210px] h-[140px] object-cover' src="/Images/profile.jpeg" alt="profile image" />
        <div className='text-xl mt-3 mb-1 text-center dark:text-gray-200 text-gray-700 font-medium'>{props.person}</div>
        <div className='text-center mb-4 dark:text-white'>{props.followers}</div>
        <button type="submit" className='hover:bg-blue-500 hover:text-white transition-all duration-1000 mb-10 border-2 border-blue-500 text-blue-500 w-9/12 py-2 mx-auto rounded-3xl text-lg font-medium'>Follow +</button>
    </div>
  )
}

export default CardSuggested