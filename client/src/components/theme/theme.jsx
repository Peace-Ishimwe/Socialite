import React, { useState } from 'react'

const Theme = () => {
    const [theme , setTheme ] = useState(localStorage.theme)
    console.log(theme)
    if(theme === 'dark'){
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark')
    }else{
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
    }
    
}

export default Theme