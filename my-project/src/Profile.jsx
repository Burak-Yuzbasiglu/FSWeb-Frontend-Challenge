import React from 'react';
import { useHeader } from './HeaderContext.jsx';

function Profile() {
    const { isDarkMode } = useHeader();

    return (
        <div className={`px-8 py-16 ${!isDarkMode ? 'bg-[#252128] text-white' : 'bg-white text-black'}`}>
            <hr className="border-[#BAB2E7] border-1 mb-8" />
            <h1 className={`text-5xl leading-none font-semibold text-left ${!isDarkMode ? 'text-[#AEBCCF]' : 'text-[#1F2937]'} mb-8`}>Profile</h1>
            <div className="flex justify-start mb-8">
                <h2 className={`text-2xl leading-8 font-medium text-left ${!isDarkMode ? 'text-[#B7AAFF]' : 'text-[#4338CA]'} mr-12`}>Profile</h2>
                <h2 className={`text-2xl leading-8 font-medium text-left ${!isDarkMode ? 'text-[#B7AAFF]' : 'text-[#4338CA]'} ml-96`}>About Me</h2>
            </div>
            <div className="flex mb-8">
                <div className="mr-8">
                    <p className={`text-lg leading-9 font-semibold text-left ${!isDarkMode ? 'text-white' : 'text-black'} mb-4`}>Doğum tarihi</p>
                    <p className={`text-lg leading-9 font-semibold text-left ${!isDarkMode ? 'text-white' : 'text-black'} mb-4`}>İkamet Şehri</p>
                    <p className={`text-lg leading-9 font-semibold text-left ${!isDarkMode ? 'text-white' : 'text-black'} mb-4`}>Eğitim Durumu</p>
                    <p className={`text-lg leading-9 font-semibold text-left ${!isDarkMode ? 'text-white' : 'text-black'} mb-4`}>Tercih Ettiği Rol</p>
                </div>
                <div>
                    <p className={`text-lg leading-9 font-normal text-left ${!isDarkMode ? 'text-[#FFFFFF]' : 'text-black'} mb-4`}>24.03.1996</p>
                    <p className={`text-lg leading-9 font-normal text-left ${!isDarkMode ? 'text-[#FFFFFF]' : 'text-black'} mb-4`}>Ankara</p>
                    <p className={`text-lg leading-9 font-normal text-left ${!isDarkMode ? 'text-[#FFFFFF]' : 'text-black'} mb-4`}>Hacettepe Ünv. Biyoloji Lisans, 2016</p>
                    <p className={`text-lg leading-9 font-normal text-left ${!isDarkMode ? 'text-[#FFFFFF]' : 'text-black'} mb-4`}>Frontend, UI</p>
                </div>
                <div>
                    <p className={`text-lg leading-7 font-normal text-left ${!isDarkMode ? 'text-white' : 'text-black'} mb-1 ml-16`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam </p>
                    <p className={`text-lg leading-3 font-normal text-left ${!isDarkMode ? 'text-white' : 'text-black'} mb-8 ml-16`}>aut, odit laborum aliquam voluptatum nisi mollitia.</p>
                    <p className={`text-lg leading-7 font-normal text-left ${!isDarkMode ? 'text-white' : 'text-black'} mb-1 ml-16`}>Minima accusamus ratione soluta aperiam sit voluptate? Dicta</p>
                    <p className={`text-lg leading-3 font-normal text-left ${!isDarkMode ? 'text-white' : 'text-black'} mb-4 ml-16`}>quod deserunt quam temporibus cumque magnam!</p>
                </div>
            </div>

        </div>
    );
}

export default Profile;
