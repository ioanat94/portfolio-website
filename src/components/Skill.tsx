import Image from 'next/image';
import React from 'react';

function Skill({ url, img }) {
  return (
    <div className='flex items-center'>
      <a href={url} target='_blank' rel='noreferrer'>
        <Image
          src={img}
          width='50px'
          height='50px'
          className='rounded-full transition-all hover:opacity-50'
        />
      </a>
    </div>
  );
}

export default Skill;
