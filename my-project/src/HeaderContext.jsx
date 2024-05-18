import React, { createContext, useContext, useState } from 'react';

const HeaderContext = createContext();

export function useHeader() {
    return useContext(HeaderContext);
}

export function HeaderProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeButton, setActiveButton] = useState(null);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleClick = (button) => {
        setActiveButton(button);
    };

    const value = {
        isDarkMode,
        toggleMode,
        activeButton,
        handleClick,
    };

    return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>;
}
