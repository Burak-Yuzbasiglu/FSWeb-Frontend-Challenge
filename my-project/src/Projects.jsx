import React from 'react';
import { useHeader } from './HeaderContext.jsx';

const Projects = () => {
    const { isDarkMode } = useHeader();

    return (
        <div className={`px-8 py-16 ${!isDarkMode ? 'bg-[#252128] text-white' : 'bg-white text-black'}`}>
            <hr className="border-1 border-solid border-gray-300 mb-8" />
            <h1 className={`font-inter text-5xl font-semibold text-left ${!isDarkMode ? 'text-[#AEBCCF]' : 'text-gray-700'} mb-8`}>Projects</h1>
            <div className="flex justify-between">
                <div className="max-w-xs">
                    <img src="./src/res1.svg" alt="Workintech" />
                    <h2 className={`mt-4 font-inter text-2xl font-medium text-left text-indigo-700 mb-2 ${!isDarkMode ? 'text-white' : 'text-gray-700'}`}>Workintech</h2>
                    <p className={`mt-4 mb-10 font-inter text-xs font-normal text-left ${!isDarkMode ? 'text-white' : 'text-gray-600'} mb-4`}>
                        A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.
                    </p>
                    <div className="flex">
                        <div className={` px-2 py-1 rounded-l-md mr-2 ${!isDarkMode ? 'text-[#8F88FF] bg-[#383838] border-[#8F88FF] border rounded-md' : 'text-[#3730A3]  border-[#3730A3] border rounded-md'}`}>react</div>
                        <div className={` px-2 py-1 mr-2 ${!isDarkMode ? 'text-[#8F88FF] bg-[#383838] border-[#8F88FF] border rounded-md' : 'text-[#3730A3]  border-[#3730A3] border rounded-md'}`}>redux</div>
                        <div className={` px-2 py-1 rounded-r-md ${!isDarkMode ? 'text-[#8F88FF] bg-[#383838] border-[#8F88FF] border rounded-md' : 'text-[#3730A3]  border-[#3730A3] border rounded-md'}`}>axios</div>
                    </div>
                    <div className="flex mt-4">
                        <span className={`font-inter text-sm font-semibold text-left text-indigo-700 mr-52 border-b border-[#3730A3] mb-4 ${!isDarkMode ? 'text-white' : 'text-gray-700'}`}>Github</span>
                        <span className={`font-inter text-sm font-semibold text-left text-indigo-700 border-b border-[#3730A3] mb-4 ${!isDarkMode ? 'text-white' : 'text-gray-700'}`}>View Site</span>
                    </div>
                </div>
                <div className="max-w-xs">
                    <img src={"./src/resim2.svg"} alt="Random Jokes" />
                </div>
                <div className="max-w-xs">
                    <img src="./src/resim3.svg" alt="Journey" />
                    <h2 className={`mt-4 font-inter text-2xl font-medium text-left text-indigo-700 mb-2 ${!isDarkMode ? 'text-white' : 'text-gray-700'}`}>Journey</h2>
                    <p className={`mt-4 mb-10 font-inter text-xs font-normal text-left ${!isDarkMode ? 'text-white' : 'text-gray-600'} mb-4`}>
                        A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.
                    </p>
                    <div className="flex">
                        <div className={` px-2 py-1 rounded-l-md mr-2 ${!isDarkMode ? 'text-[#8F88FF] bg-[#383838] border-[#8F88FF] border rounded-md' : 'text-[#3730A3]  border-[#3730A3] border rounded-md'}`}>react</div>
                        <div className={` px-2 py-1 mr-2 ${!isDarkMode ? 'text-[#8F88FF] bg-[#383838] border-[#8F88FF] border rounded-md' : 'text-[#3730A3]  border-[#3730A3] border rounded-md'}`}>redux</div>
                        <div className={` px-2 py-1 rounded-r-md ${!isDarkMode ? 'text-[#8F88FF] bg-[#383838] border-[#8F88FF] border rounded-md' : 'text-[#3730A3]  border-[#3730A3] border rounded-md'}`}>axios</div>
                    </div>
                    <div className="flex mt-4">
                        <span className={`font-inter text-sm font-semibold text-left text-indigo-700 mr-52 border-b border-[#3730A3] mb-4 ${!isDarkMode ? 'text-white' : 'text-gray-700'}`}>Github</span>
                        <span className={`font-inter text-sm font-semibold text-left text-indigo-700 border-b border-[#3730A3] mb-4 ${!isDarkMode ? 'text-white' : 'text-gray-700'}`}>View Site</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
