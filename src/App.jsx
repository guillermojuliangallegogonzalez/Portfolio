import React, { useEffect } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Home from './components/Sections/Home';
import About from './components/Sections/About';

import Services from './components/Sections/Services';
import Skills from './components/Sections/Skills';

import Portfolio from './components/Sections/Portfolio';
import Contact from './components/Sections/Contact';

function App() {

  return (
    <div className="font-sans antialiased text-text-color bg-body-color transition-colors duration-300">
      <Sidebar />
      <main className="md:pl-20">
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
