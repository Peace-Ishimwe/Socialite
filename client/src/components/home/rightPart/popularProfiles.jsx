import React from 'react'
import Profiles from './poularProfiles/profiles'

const PopularProfiles = () => {
  return (
    <div className='main-container bg-gray-200 dark:bg-subMajorDark p-5 rounded-md'>
        <div className='mb-5 text-lg dark:text-white font-semibold text-black'>Popular profiles</div>
        <div className='flex flex-col gap-3 overflow-scroll h-fit'>
            <Profiles followers={'1267'} />
            <Profiles followers={'956'} />
            <Profiles followers={'889'} />
            <Profiles followers={'770'} />
            <Profiles followers={'520'} />
            <Profiles followers={'240'} />

            <Profiles followers={'889'} />
            <Profiles followers={'770'} />
            <Profiles followers={'520'} />
            <Profiles followers={'240'} />

            <Profiles followers={'889'} />
            <Profiles followers={'770'} />
            <Profiles followers={'520'} />
            <Profiles followers={'240'} />
        </div>
    </div>
  )
}

export default PopularProfiles