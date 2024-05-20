import React from 'react';
import { useHeader } from './HeaderContext.jsx';

function Skills() {
    const { isDarkMode, isTurkish } = useHeader();

    return (
        <div className={`px-8 py-16 ${!isDarkMode ? 'bg-[#252128] text-white' : 'bg-white text-black'}`}>
            <h1 className={`text-5xl leading-none font-semibold text-left ${!isDarkMode ? 'text-[#AEBCCF]' : 'text-[#1F2937]'} mb-8`}>
                {!isTurkish ? 'Beceriler' : 'Skills'}
            </h1>
            <div className="flex justify-between">
                <div className="max-w-xs">
                    <h2 className={`text-2xl leading-8 font-medium text-left ${!isDarkMode ? 'text-[#B7AAFF]' : 'text-[#4338CA]'} mb-2`}>
                        JavaScript
                    </h2>
                    <p className={`text-xs leading-4 font-normal text-left ${!isDarkMode ? 'text-[#FFFFFF]' : 'text-[#6B7280]'}`}>
                        {isTurkish
                            ? 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                            : ' JavaScript işlevleri, sosyal medya akışlarını yenilemekten animasyonlar ve etkileşimli haritalar göstermeye kadar, bir web sitesi kullanıcısının deneyimini iyileştirebilir.'}
                    </p>
                </div>
                <div className="max-w-xs">
                    <h2 className={`text-2xl leading-8 font-medium text-left ${!isDarkMode ? 'text-[#B7AAFF]' : 'text-[#4338CA]'} mb-2`}>
                        React.Js
                    </h2>
                    <p className={`text-xs leading-4 font-normal text-left ${!isDarkMode ? 'text-[#FFFFFF]' : 'text-[#6B7280]'}`}>
                        {isTurkish
                            ? 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                            : 'Web uygulamaları için kullanıcı arayüzleri oluşturmak amacıyla kullanılan güçlü bir JavaScript kütüphanesidir.'}
                    </p>
                </div>
                <div className="max-w-xs">
                    <h2 className={`text-2xl leading-8 font-medium text-left ${!isDarkMode ? 'text-[#B7AAFF]' : 'text-[#4338CA]'} mb-2`}>
                        Node.Js
                    </h2>
                    <p className={`text-xs leading-4 font-normal text-left ${!isDarkMode ? 'text-[#FFFFFF]' : 'text-[#6B7280]'}`}>
                        {isTurkish
                            ? 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                            : 'JavaScript çalıştırmak için kullanılan bir platformdur.Açık kaynaklı ve platformlar arası bir çalıştırma ortamıdır.'}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Skills;
