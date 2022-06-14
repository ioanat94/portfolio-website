import Image from 'next/image';
import React from 'react';

function Socials() {
  return (
    <div className='flex gap-4'>
      <a
        href='https://github.com/ioanat94'
        target='_blank'
        rel='noreferrer'
        className='h-[30px]'
      >
        <Image
          src='/assets/other/github.png'
          width='30px'
          height='30px'
          className='cursor-pointer md:transition-all md:hover:opacity-50'
          alt='GitHub Logo'
        />
      </a>
      <a
        href='https://www.linkedin.com/in/ioana-tiplea/'
        target='_blank'
        rel='noreferrer'
        className='h-[30px]'
      >
        <Image
          src='/assets/other/linkedin.png'
          width='30px'
          height='30px'
          className='cursor-pointer md:transition-all md:hover:opacity-50'
          alt='LinkedIn Logo'
        />
      </a>
      <a href='mailto:ioanatiplea94@gmail.com' className='h-[30px]'>
        <Image
          src='/assets/other/email.jpg'
          width='30px'
          height='30px'
          className='cursor-pointer md:transition-all md:hover:opacity-50'
          alt='Email Logo'
        />
      </a>
    </div>
  );
}

export default Socials;
