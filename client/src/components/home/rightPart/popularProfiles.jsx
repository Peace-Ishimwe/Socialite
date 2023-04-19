import React from 'react'
import Profiles from './poularProfiles/profiles'

const PopularProfiles = () => {
  return (
    <div className='main-container bg-gray-100 dark:bg-subMajorDark pb-5 rounded-md overflow-scroll h-[23.5rem]'>
        <div className='mb-5 text-lg dark:text-white font-semibold text-black sticky top-0 shadow-md p-5 bg-gray-200 dark:bg-subMajorDark'>Popular profiles</div>
        <div className='flex flex-col gap-3 pl-5'>
            <Profiles user={'Peace Prop'} followers={'1267'} />
            <Profiles user={'Michael Andrew'} followers={'956'} />
            <Profiles user={'Paul Peter'} followers={'889'} />
            <Profiles user={'Raul Samuel'} followers={'770'} />
            <Profiles user={'Yves Maurice'} followers={'520'} />
            <Profiles user={'Kevin Kae'} followers={'240'} />
            <Profiles user={'John Peter'} followers={'889'} />
            <Profiles user={'Tailey Henry'} followers={'770'} />
            <Profiles user={'Pokeman Theater'} followers={'520'} />
            <Profiles user={'Haily Anderson'} followers={'240'} />
            <Profiles user={'Hope Angel'} followers={'889'} />
            <Profiles user={'Holly Drill'} followers={'770'} />
            <Profiles user={'Footbal fan'} followers={'520'} />
            <Profiles user={'Peace Prop'} followers={'240'} />
        </div>
    </div>
  )
}

export default PopularProfiles