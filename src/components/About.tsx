import Image from 'next/image';
import React from 'react';
import Socials from './Socials';

function About() {
  return (
    <div
      id='about'
      className='flex flex-col p-6 pb-0 items-center md:flex-row md:items-center md:justify-between md:gap-40 md:max-w-6xl md:mx-auto md:min-h-[40vh]'
    >
      <div className='flex flex-col gap-4 md:max-w-md md:mt-10'>
        <h1 className='text-mint text-4xl'>About Me</h1>
        <p className='text-white font-light text-justify'>
          I am a Full Stack Developer living in Finland. I build front-end and
          full stack applications, usually using the MERN stack.
        </p>
        <div className='flex justify-between items-center'>
          <Socials />
          <a
            href='https://firebasestorage.googleapis.com/v0/b/netflix-clone-49e41.appspot.com/o/CV_Ioana_Tiplea.pdf?alt=media&token=16bb291c-a568-43d3-917e-84ebbf8441af'
            target='_blank'
            rel='noreferrer'
            className='text-mint text-md border-solid border border-mint rounded px-2 py-1 cursor-pointer md:transition-all md:hover:text-white md:hover:border-white'
          >
            RESUME
          </a>
        </div>
      </div>
      <div className='max-w-md'>
        <Image
          priority
          src='/assets/other/programming.png'
          width='400px'
          height='400px'
          className='drop-shadow-custom'
          alt='Laptop'
        />
      </div>
    </div>
  );
}

export default About;
