import React from 'react';
import { useHeader } from './HeaderContext.jsx';

const Footer = () => {
    const { isDarkMode, isTurkish } = useHeader();

    return (
        <div className={`py-16 pl-8 pr-8 ${!isDarkMode ? 'bg-[#141414] text-white' : 'bg-[#F9F9F9] text-black'}`}>
            <h1 className={`font-inter text-5xl font-semibold text-left ${!isDarkMode ? 'text-[#AEBCCF]' : 'text-gray-700'} mb-8`}>
                {!isTurkish ? 'Bir sonraki projenizde' : 'Let’s work together on'}
            </h1>
            <h1 className={`font-inter text-5xl font-semibold text-left ${!isDarkMode ? 'text-[#AEBCCF]' : 'text-gray-700'} mb-8`}>
                {!isTurkish ? 'birlikte çalışalım.' : 'your next product.'}
            </h1>
            <div className="flex items-center mb-8">
                <span className="mr-2">👉</span>
                <a href="mailto:almilasucode@gmail.com" className={`font-inter text-base font-medium text-left ${!isDarkMode ? 'text-[#BAB2E7]' : 'text-[#AF0C48]'} `}>
                    almilasucode@gmail.com
                </a>
            </div>
            <div className="flex justify-end">
                <a href="#" className={`font-inter text-base font-medium text-left ${!isDarkMode ? 'text-[#E1E1FF]' : 'text-black'} mr-8 hover:text-gray-800`}>
                    {!isTurkish ? 'Kişisel Blog' : 'Personal Blog'}
                </a>
                <a href="#" className={`font-inter text-base font-medium text-left ${!isDarkMode ? 'text-[#17D18B]' : 'text-green-600'} mr-8 hover:text-green-800`}>
                    Github
                </a>
                <a href="#" className={`font-inter text-base font-medium text-left ${!isDarkMode ? 'text-[#0BA6F6]' : 'text-blue-600'} hover:text-blue-800`}>
                    Linkedin
                </a>
            </div>
        </div>
    );
}

export default Footer;
