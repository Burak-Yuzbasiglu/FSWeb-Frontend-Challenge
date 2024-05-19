import React from 'react';
import githubLogo from 'C:/Users/casper/Documents/GitHub/FSWeb-Frontend-Challenge/my-project/src/github.svg';
import linkedinLogo from 'C:/Users/casper/Documents/GitHub/FSWeb-Frontend-Challenge/my-project/src/linkedin.svg';
import { useHeader } from './HeaderContext.jsx';

function Hero() {
    const { isDarkMode } = useHeader();

    return (
        <div className={`flex justify-center items-center  py-16  ${isDarkMode ? 'bg-white text-black' : 'bg-[#252128] text-white'}`}>
            <div className="flex justify-between items-center max-w-8xl mx-auto px-8">
                <div className="flex flex-col justify-center items-start max-w-xl">
                    <div className="flex items-center mb-4">
                        <hr className={`border-t border-[#3730A3] w-20 ${isDarkMode ? 'border-[#3730A3]' : 'border-[#BAB2E7]'}`} />
                        <h1 className={`text-xl leading-10 font-medium text-[#4338CA] ml-4 ${isDarkMode ? 'text-[#4338CA]' : 'text-[#B7AAFF]'}`}>Almila Su</h1>
                    </div>
                    <h1 className={`text-7xl font-bold text-[#1F2937] leading-none mb-0 ${isDarkMode ? 'text-[#1F2937]' : 'text-[#AEBCCF]'}`}>Creative thinker</h1>
                    <h1 className={`text-7xl font-bold text-[#1F2937] leading-none mb-8 ${isDarkMode ? 'text-[#1F2937]' : 'text-[#AEBCCF]'}`}>Minimalism lover</h1>
                    <p className={`text-lg font-normal text-[#6B7280] mb-8 ${isDarkMode ? 'text-[#6B7280]' : 'text-[#FFFFFF]'}`}>
                        Hi, I’m Almila. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.
                    </p>
                    <div className="flex space-x-3">
                        <button className={`text-lg leading-7 font-medium ${isDarkMode ? 'bg-[#3730A3] text-white' : 'bg-[#BAB2E7] text-[#252128]'} px-8 py-3 rounded-lg`}>Hire me</button>

                        <button className={`text-lg  font-medium bg-white text-[#3730A3] px-8 py-3 rounded-lg flex items-center ${isDarkMode ? 'dark:bg-[#FFFFFF] dark:text-[#E1E1FF]' : 'dark:bg-[#383838] dark:text-[#3730A3]'}`} style={{ padding: "3px 7px", border: "2px solid #3730A3" }}>
                            <img src={githubLogo} alt="Github" className="" />
                        </button>

                        <button className={`text-lg leading-7 font-medium  text-[#3730A3] px-8 py-3 rounded-lg flex items-center ${!isDarkMode ? 'bg-[#383838] dark:text-[#3730A3]' : 'bg-[#FFFFFF] dark:text-[#3730A3]'}`} style={{ padding: "3px 7px", border: "2px solid #3730A3" }}>
                            <img src={linkedinLogo} alt="Linkedin" className="w-6 h-6 mr-1" />
                            Linkedin
                        </button>
                    </div>
                </div>
                <div>
                    <img src="./src/resim.svg" alt="Almila Su" className="w-256 h-256 rounded-lg  object-cover" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
