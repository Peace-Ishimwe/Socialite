import React from 'react'
import Profiles from './poularProfiles/profiles'

const PopularProfiles = () => {
  return (
    <div className='main-container bg-gray-100 dark:bg-subMajorDark pb-5 rounded-md overflow-scroll h-[23.5rem]'>
        <div className='mb-5 text-lg dark:text-white font-semibold text-black sticky top-0 shadow-md p-5 bg-gray-200 dark:bg-subMajorDark'>Popular profiles</div>
        <div className='flex flex-col gap-3 pl-5'>
            <Profiles user={'Peace Prop'} followers={'1267'} />
            <Profiles user={'Peace Prop'} followers={'956'} />
            <Profiles user={'Peace Prop'} followers={'889'} />
            <Profiles user={'Peace Prop'} followers={'770'} />
            <Profiles user={'Peace Prop'} followers={'520'} />
            <Profiles user={'Peace Prop'} followers={'240'} />
            <Profiles user={'Peace Prop'} followers={'889'} />
            <Profiles user={'Peace Prop'} followers={'770'} />
            <Profiles user={'Peace Prop'} followers={'520'} />
            <Profiles user={'Peace Prop'} followers={'240'} />
            <Profiles user={'Peace Prop'} followers={'889'} />
            <Profiles user={'Peace Prop'} followers={'770'} />
            <Profiles user={'Peace Prop'} followers={'520'} />
            <Profiles user={'Peace Prop'} followers={'240'} />
        </div>
    </div>
  )
}

export default PopularProfiles