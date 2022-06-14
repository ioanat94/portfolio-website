import Image from 'next/image';
import React from 'react';
import Socials from './Socials';

function About() {
  return (
    <div
      id='about'
      className='flex flex-col p-6 pb-0 items-center md:flex-row md:items-center md:justify-between md:gap-10 md:max-w-7xl md:mx-auto md:min-h-[40vh]'
    >
      <div className='flex flex-col gap-4 md:max-w-md'>
        <h1 className='text-mint text-4xl'>About Me</h1>
        <p className='text-white font-light text-justify'>
          I am a Full Stack Developer living in Finland. I build front-end and
          full stack applications, usually using the MERN stack.
        </p>
        <div className='flex justify-between items-center'>
          <Socials />
          <span className='text-mint text-sm border-solid border-2 border-mint rounded px-2 py-1 cursor-pointer transition-all hover:text-white hover:border-white'>
            RESUME
          </span>
        </div>
      </div>
      <div className='max-w-md'>
        <Image
          src='/assets/other/programming.png'
          width='500px'
          height='500px'
        />
      </div>
    </div>
  );
}

export default About;
