import Image from 'next/image';
import React from 'react';

function Skill({ name, url, img }) {
  return (
    <div className='flex flex-col items-center gap-4'>
      <span className='text-white font-light text-center md:text-sm lg:text-base'>
        {name}
      </span>
      <a href={url} target='_blank' rel='noreferrer'>
        <Image
          src={img}
          width='50px'
          height='50px'
          className='rounded-full md:transition-all md:hover:opacity-50'
          alt='Skill Icon'
        />
      </a>
    </div>
  );
}

export default Skill;
