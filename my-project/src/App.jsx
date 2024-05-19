import React from 'react';
import Header from './Header';
import { HeaderProvider, useHeader } from './HeaderContext';
import Hero from './Hero';
import Skills from './Skills';
import Profile from './Profile';
import Projects from './Projects';
import Footer from './Footer';

function AppContent() {
  const { isDarkMode } = useHeader();

  return (
    <div className={` ${!isDarkMode ? 'bg-[#252128] text-white' : 'bg-white text-black'}`}>
      <div className='max-w-7xl mx-auto'>
        <Header />
        <Hero />
        <Skills />
        <Profile />
        <Projects />

      </div >
      <div className={` ${!isDarkMode ? 'bg-[#141414] text-white' : 'bg-[#F9F9F9] text-black'}`}>
        <div className='max-w-7xl mx-auto' >
          <Footer />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <HeaderProvider>
      <AppContent />
    </HeaderProvider>
  );
}

export default App;
