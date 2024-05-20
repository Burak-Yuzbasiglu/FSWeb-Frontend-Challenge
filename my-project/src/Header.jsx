import React from 'react';
import { useHeader } from './HeaderContext.jsx';

function Header() {
    const { isDarkMode, toggleMode, activeButton, handleClick, isTurkish, toggleLanguage } = useHeader();

    const handleToggleMode = () => {
        toggleMode();
        document.body.classList.toggle('dark');
    };

    return (
        <>
            <div className={`flex justify-end items-center p-4 mr-10 ${isDarkMode ? 'bg-[#FFFFFF]' : 'bg-[#252128]'}`}>
                <div className="flex items-center space-x-2">
                    <div
                        className={`relative flex items-center w-[55px] h-[24px] rounded-full cursor-pointer ${isDarkMode ? 'bg-[#4731D3]' : 'bg-black'}`}
                        onClick={handleToggleMode}
                    >
                        <div
                            className={`absolute w-[15px] h-[16px] rounded-full transition-transform duration-300 ${isDarkMode ? 'bg-[#FFE86E] transform translate-x-[35px] rotate-225' : 'bg-[#FFE86E] transform translate-x-[5px] rotate-45'}`}
                        >
                            {!isDarkMode && (
                                <div className="w-[12px] h-[12px] bg-black rounded-full transform translate-x-1.5 translate-y-1.5"></div>
                            )}
                        </div>
                    </div>
                    <span className={`font-inter text-[15px] font-bold leading-[18.15px] ${isDarkMode ? 'text-[#777777]' : 'text-[#D9D9D9]'}`}>
                        {isDarkMode ? (!isTurkish ? 'KARANLIK MOD' : 'DARK MODE') : (!isTurkish ? 'AYDINLIK MOD' : 'LIGHT MODE')}
                    </span>
                    <span className="font-inter text-[15px] font-bold leading-[18.15px] text-[#777777]">|</span>
                    <span
                        className="font-inter text-[15px] font-bold leading-[18.15px] text-[#777777] cursor-pointer"
                        onClick={toggleLanguage}
                    >
                        <span className="text-blue-500">{isTurkish ? 'TÜRKÇE' : 'ENGLISH'}</span>
                        <span>{isTurkish ? "'YE GEÇ" : " 'IS THE LANGUAGE TO SWITCH"}</span>
                    </span>
                </div>
            </div>
            <div className={`flex justify-between items-center p-4 ${isDarkMode ? 'bg-[#FFFFFF]' : 'bg-[#252128]'}`}>
                <div className="flex items-center">
                    <div className="ml-3 w-12 h-12 bg-[#EEEBFF] rounded-full flex items-center justify-center transform rotate-[22deg]">
                        <span className="text-[#3730A3] text-xl font-bold transform rotate-[-22deg]">B</span>
                    </div>
                </div>
                <div className="flex mr-10 items-center space-x-[54px]">
                    <button
                        className={`text-lg leading-7 font-medium ${activeButton === 'skills' ? 'text-[#3730A3] border-[#3730A3] border-2 border-solid bg-white py-[10.5px] px-[22.5px] rounded-lg' : 'text-[#6B7280]'} cursor-pointer`}
                        onClick={() => handleClick('skills')}
                    >
                        {!isTurkish ? 'Yetenekler' : 'Skills'}
                    </button>
                    <button
                        className={`text-lg leading-7 font-medium ${activeButton === 'projects' ? 'text-[#3730A3] border-[#3730A3] border-2 border-solid bg-white py-[10.5px] px-[22.5px] rounded-lg' : 'text-[#6B7280]'} cursor-pointer`}
                        onClick={() => handleClick('projects')}
                    >
                        {!isTurkish ? 'Projeler' : 'Projects'}
                    </button>
                    <button
                        className={`text-lg leading-7 font-medium ${activeButton === 'hireMe' ? 'text-[#3730A3] border-[#3730A3] border-2 border-solid bg-white py-[10.5px] px-[22.5px] rounded-lg' : 'text-[#6B7280]'} cursor-pointer`}
                        onClick={() => handleClick('hireMe')}
                    >
                        {!isTurkish ? 'Beni İşe Al' : 'Hire me'}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Header;
