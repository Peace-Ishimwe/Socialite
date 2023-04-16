import React from 'react'
import { SearchIcon } from '../../assets/icons/icons'
import { HomeAll } from './homeAll/homeAll'
import { LogoImage } from './homeAll/homeAll'

const Middle = () => {
  return (
    <main className="header-home w-full md:w-10/12 lg:w-8/12">
      <div className='top-middle bg-majorDark pt-5 lg:pb-5 flex justify-between px-5 w-full gap-5 items-start'>
        <LogoImage display='hidden sm:flex md:hidden' />
        <div className='flex gap-1 border-2 rounded-full p-2 bg-white w-10/12 sm:w-7/12 md:w-10/12 lg:mx-auto'>
          <SearchIcon />
          <input className='outline-none w-full' type="search" name="search" id="search" placeholder='connect with friends' />
        </div>
        <HomeAll display='flex lg:hidden' />
      </div>
    </main>
  )
}

export default Middle