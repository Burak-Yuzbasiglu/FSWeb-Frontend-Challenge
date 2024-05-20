import React from 'react';
import { useHeader } from './HeaderContext.jsx';

function Profile() {
    const { isDarkMode, isTurkish } = useHeader();

    return (
        <div className={`px-8 py-16 ${!isDarkMode ? 'bg-[#252128] text-white' : 'bg-white text-black'}`}>
            <hr className="border-[#BAB2E7] border-1 mb-8" />
            <h1 className={`text-5xl leading-none font-semibold text-left ${!isDarkMode ? 'text-[#AEBCCF]' : 'text-[#1F2937]'} mb-8`}>
                {!isTurkish ? 'Profil' : 'Profile'}
            </h1>
            <div className="flex justify-start mb-8">
                <h2 className={`text-2xl leading-8 font-medium text-left ${!isDarkMode ? 'text-[#B7AAFF]' : 'text-[#4338CA]'} mr-12`}>
                    {!isTurkish ? 'Profil' : 'Profile'}
                </h2>
                <h2 className={`text-2xl leading-8 font-medium text-left ${!isDarkMode ? 'text-[#B7AAFF]' : 'text-[#4338CA]'} ml-96`}>
                    {!isTurkish ? 'Hakkımda' : 'About Me'}
                </h2>
            </div>
            <div className="flex mb-8">
                <div className="mr-8">
                    <p className={`text-lg leading-9 font-semibold text-left ${!isDarkMode ? 'text-white' : 'text-black'} mb-4`}>
                        {!isTurkish ? 'Doğum tarihi' : 'Birthdate'}
                    </p>
                    <p className={`text-lg leading-9 font-semibold text-left ${!isDarkMode ? 'text-white' : 'text-black'} mb-4`}>
                        {!isTurkish ? 'İkamet Şehri' : 'Residence City'}
                    </p>
                    <p className={`text-lg leading-9 font-semibold text-left ${!isDarkMode ? 'text-white' : 'text-black'} mb-4`}>
                        {!isTurkish ? 'Eğitim Durumu' : 'Education'}
                    </p>
                    <p className={`text-lg leading-9 font-semibold text-left ${!isDarkMode ? 'text-white' : 'text-black'} mb-4`}>
                        {!isTurkish ? 'Tercih Ettiği Rol' : 'Preferred Role'}
                    </p>
                </div>
                <div>
                    <p className={`text-lg leading-9 font-normal text-left ${!isDarkMode ? 'text-[#FFFFFF]' : 'text-black'} mb-4`}>24.03.1996</p>
                    <p className={`text-lg leading-9 font-normal text-left ${!isDarkMode ? 'text-[#FFFFFF]' : 'text-black'} mb-4`}>Ankara</p>
                    <p className={`text-lg leading-9 font-normal text-left ${!isDarkMode ? 'text-[#FFFFFF]' : 'text-black'} mb-4`}>Hacettepe Ünv. Biyoloji Lisans, 2016</p>
                    <p className={`text-lg leading-9 font-normal text-left ${!isDarkMode ? 'text-[#FFFFFF]' : 'text-black'} mb-4`}>Frontend, UI</p>
                </div>
                <div>
                    <p className={`text-lg leading-7 font-normal text-left ${!isDarkMode ? 'text-white' : 'text-black'} mb-1 ml-16`}>
                        {!isTurkish ? 'Merhaba, ben Almila. Ben bir full-stack yazılım geliştiricisiyim.' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam'}
                    </p>
                    <p className={`text-lg leading-3 font-normal text-left ${!isDarkMode ? 'text-white' : 'text-black'} mb-8 ml-16`}>
                        {!isTurkish ? 'Harika kullanıcı deneyimlerine sahip sağlam ve ölçeklenebilir' : 'aut, odit laborum aliquam voluptatum nisi mollitia.'}
                    </p>
                    <p className={`text-lg leading-7 font-normal text-left ${!isDarkMode ? 'text-white' : 'text-black'} mb-1 ml-16`}>
                        {!isTurkish ? ' ürünleri oluşturacak bir geliştirici arıyorsanız benimle iletişime,' : 'Minima accusamus ratione soluta aperiam sit voluptate? Dicta'}
                    </p>
                    <p className={`text-lg leading-3 font-normal text-left ${!isDarkMode ? 'text-white' : 'text-black'} mb-4 ml-16`}>
                        {!isTurkish ? 'geçin ve sizinle zaman kaybetmeden el sıkışalım.' : 'quod deserunt quam temporibus cumque magnam!'}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
