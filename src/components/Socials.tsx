import Image from 'next/image';
import React from 'react';

function Socials() {
  return (
    <div className='flex gap-4'>
      <a href='https://github.com/ioanat94' target='_blank' rel='noreferrer'>
        <Image
          src='/assets/other/github.png'
          width='30px'
          height='30px'
          className='cursor-pointer transition-all hover:opacity-50'
        />
      </a>
      <a
        href='https://www.linkedin.com/in/ioana-tiplea/'
        target='_blank'
        rel='noreferrer'
      >
        <Image
          src='/assets/other/linkedin.png'
          width='30px'
          height='30px'
          className='cursor-pointer transition-all hover:opacity-50'
        />
      </a>
      <a href='mailto:ioanatiplea94@gmail.com'>
        <Image
          src='/assets/other/email.jpg'
          width='30px'
          height='30px'
          className='cursor-pointer transition-all hover:opacity-50'
        />
      </a>
    </div>
  );
}

export default Socials;
