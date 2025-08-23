import React from 'react';

import Hero from '../Components/Sections/Hero';
import About from '../Components/Sections/About';
import Experience from '../Components/Sections/Experience';

const LandingPage = () => {

  return (
    <main className='flex-col justify-center items-center content-center'>
      <Hero />
      <About />
      <Experience />

      <div id="projects" className='h-screen bg-amber-500 flex items-center justify-center'>
        <h2 className='text-3xl font-medium'>Projects</h2>
      </div>
      <div id="contact" className='h-screen bg-amber-700 flex items-center justify-center'>
        <h2 className='text-3xl font-medium'>Contact</h2>
      </div>
    </main>
  );
};

export default LandingPage;
