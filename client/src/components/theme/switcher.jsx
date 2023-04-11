import React , { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkside from './useDarkside'

const Switcher = () => {
    const [colorTheme , setTheme] = useDarkside()
    const [darkSide , setDarkSide] = useState(colorTheme === 'dark' ? false : true) 

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkSide(checked);
    };

    return (
        <div className='fixed bottom-5 left-5'>
          <DarkModeSwitch
            checked={darkSide}
            onChange={toggleDarkMode}
            size={46}
          />
        </div>
    );
}

export default Switcher