import { useState, useEffect } from 'react';
import { MdModeNight, MdOutlineWbSunny } from "react-icons/md";

const DarkModeToggle = ({ lightColor, darkColor, textColor, className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const buttonClass = `bg-${isDarkMode ? darkColor : lightColor} ${textColor} ${className}`;

  return (
    <button className={buttonClass} onClick={toggleDarkMode}>
      {isDarkMode ? <MdOutlineWbSunny size={20}/> : <MdModeNight size={20}/>}
    </button>
  );
}

export default DarkModeToggle;
