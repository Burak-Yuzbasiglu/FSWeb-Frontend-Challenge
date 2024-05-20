import React, { createContext, useContext, useState } from 'react';

const HeaderContext = createContext();

export function useHeader() {
    return useContext(HeaderContext);
}

export function HeaderProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [activeButton, setActiveButton] = useState(null);
    const [isTurkish, setIsTurkish] = useState(true);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleClick = (button) => {
        setActiveButton(button);
        window.scrollBy({
            top: 1600,

            behavior: 'smooth'
        })
    };

    const toggleLanguage = () => {
        setIsTurkish(!isTurkish);
    };

    const value = {
        isDarkMode,
        toggleMode,
        activeButton,
        handleClick,
        isTurkish,
        toggleLanguage,
    };

    return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>;
}
