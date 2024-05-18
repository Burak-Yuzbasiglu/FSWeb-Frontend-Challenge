import React from 'react';
import Header from './Header';
import { HeaderProvider } from './HeaderContext';
import Hero from './Hero'

function App() {
  return (


    <HeaderProvider>
      <div>
        <Header />
        <Hero />
        {/* Diğer bileşenler buraya gelecek */}
      </div>
    </HeaderProvider>
  );
}

export default App;
