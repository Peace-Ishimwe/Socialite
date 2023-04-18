import React from 'react'
import ProfileImage from "../../../../assets/Images/profile.jpeg";


const CardSuggested = (props) => {
  return (
    <div className='rounded-xl overflow-hidden w-fit min-w-fit flex flex-col bg-white dark:bg-subMajorDark box-border'>
        <img className='w-[210px] h-[140px]' src="/Images/profile.jpeg" alt="profile image" />
        <div className='text-xl mt-3 mb-1 text-center dark:text-gray-200 text-gray-700 font-medium'>{props.person}</div>
        <div className='text-center mb-4 dark:text-white'>{props.followers}</div>
        <button type="submit" className='mb-10 border-2 border-gray-500 dark:border-gray-200 w-9/12 py-2 mx-auto rounded-3xl text-lg font-medium text-gray-700 dark:text-gray-200'>Follow +</button>
    </div>
  )
}

export default CardSuggested