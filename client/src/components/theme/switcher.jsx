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
          <DarkModeSwitch
            checked={darkSide}
            onChange={toggleDarkMode}
            size={24}
          />
    );
}

export default Switcher