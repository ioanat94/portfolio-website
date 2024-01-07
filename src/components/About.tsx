import Image from 'next/image';
import React from 'react';
import Socials from './Socials';

function About() {
  return (
    <>
      <a className='anchor' id='about'></a>
      <div className='flex flex-col px-6 pt-6 items-center gap-4 md:pt-0 md:flex-row md:items-end md:justify-between md:gap-20 md:max-w-6xl md:mx-auto lg:gap-40 lg:items-center'>
        <div className='flex flex-col gap-4 md:max-w-md md:mt-10'>
          <h1 className='text-mint text-4xl'>About Me</h1>
          <p className='text-white font-light'>
            I am a Full Stack Developer living in Finland. I build front-end and
            full stack applications, usually using the MERN stack.
          </p>
          <div className='flex justify-between items-center'>
            <Socials />
            <a
              href='https://firebasestorage.googleapis.com/v0/b/netflix-clone-49e41.appspot.com/o/Ioana_Tiplea_CV_060124.pdf?alt=media&token=c11e6bb0-502b-470b-9715-d9f81763dac8'
              target='_blank'
              rel='noreferrer'
              className='text-mint text-md border-solid border border-mint rounded px-2 py-1 cursor-pointer md:transition-all md:hover:text-darkBlue md:hover:bg-mint md:hover:border-darkBlue'
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
    </>
  );
}

export default About;
