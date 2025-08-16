import React from 'react';

const LandingPage = () => {

  return (
    <main className='flex-col justify-center items-center content-center'>
      <div className='min-h-screen flex items-center justify-center'>
        <h1 className='text-5xl font-medium'>LANDING PAGE</h1>
      </div>

      <div id="about" className='h-screen bg-amber-100 flex items-center justify-center'>
        <h2 className='text-3xl font-medium'>About</h2>
      </div>
      <div id="experience" className='h-screen bg-amber-300 flex items-center justify-center'>
        <h2 className='text-3xl font-medium'>Experience</h2>
      </div>
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
