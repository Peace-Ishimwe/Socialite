import React from 'react'
import { SearchIcon } from '../../assets/icons/icons'

const Middle = () => {
  return (
    <main className="header-home flex justify-between px-5 py-2 w-8/12 lg:w-6/12 mx-auto">
        <div className='flex gap-1 border-2 rounded-full p-2 bg-white w-full'>
            <SearchIcon />
            <input className='outline-none w-full' type="search" name="search" id="search" placeholder='connect with friends' />
        </div>
        
    </main>
  )
}

export default Middle