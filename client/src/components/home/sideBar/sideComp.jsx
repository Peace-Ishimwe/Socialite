import React from 'react'

export const SideComp = (props) => {
  return (
    <main className='sidebar-home font-semibold text-gray-800 dark:text-gray-200'>
        <div className='flex w-fit items-center gap-2'>
            <div className='bg-gray-200 dark:bg-gray-700 rounded-full p-2'>
                {props.component}
            </div>
            <span>
                {props.title}
                { props.true &&
                <div className='w-full h-[.188rem] bg-gray-700 dark:bg-gray-200 rounded-full'></div>
                }
            </span>
        </div>
    </main>
  )
}

export const AddPost = (props) => {
    return(
        <main className='sidebar-home text-xs font-semibold  text-gray-800 dark:text-gray-200 rounded-full bg-gray-400 dark:bg-gray-600 w-fit px-2 py-1'>
            <div className='flex w-fit items-center gap-2'>
                <div className='bg-gray-200 dark:bg-gray-700 rounded-full p-1'>
                    {props.component}
                </div>
                <span>
                    {props.title}
                </span>
            </div>
        </main>
    )
}