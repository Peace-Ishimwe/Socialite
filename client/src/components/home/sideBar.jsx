import React from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon , AddIcon , InfoIcon , MessagesIcon , MoreIcon , NotificationIcon , PrivacyIcon , PhoneIcon  } from '../../assets/icons/icons'
import {SideComp ,  AddPost }from './sideBar/sideComp'
import ProfileImage from '../../assets/Images/profile.jpeg'
import Logo from '../../assets/Images/logo.1.png'
import Switcher from '../theme/switcher'

const SideBar = () => {
  return (
    <main className="sidebar-home flex flex-col gap-10 px-5 pt-5 pb-20 h-[100vh] justify-between bg-white dark:bg-majorDark md:w-[15%] min-w-fit">
        <div>
            <img src={Logo} alt="" />
        </div>
        <div className='flex flex-col gap-10'>
            <SideComp 
            component={<HomeIcon/>}
            title={'Home'}
            true={true}
            />
            <SideComp 
            component={<MessagesIcon/>}
            title={'Messages'}
            />
            <SideComp 
            component={<NotificationIcon/>}
            title={'Notifications'}
            />
            <a href="/about">
            <SideComp 
            component={<InfoIcon/>}
            title={'About us'}
            />
            </a>
            <a href="/contact">
            <SideComp
            component={<PhoneIcon/>}
            title={'Contact us'}
            />
            </a>
            <a href="/privacy-policy">
            <SideComp 
            component={<PrivacyIcon/>}
            title={'Privacy'}
            />
            </a>
            <SideComp 
            component={<MoreIcon/>}
            title={'More'}
            />
            <SideComp 
            component={<Switcher/>}
            title={'Theme'}
            />
        </div>
        <AddPost
        component={<AddIcon/>}
        title={'ADD POST'}
        />
        <div className='flex items-center gap-2'>
            <div className='rounded-full bg-black w-fit overflow-hidden'>
                <img className='object-cover h-10 w-10' src={ProfileImage} alt="the profile image" />
            </div>
            <span className='text-lg text-gray-800 dark:text-gray-200'>Peace Ishimwe</span>
        </div>
    </main>
  )
}

export default SideBar