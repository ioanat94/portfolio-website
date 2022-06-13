import Image from 'next/image';
import React from 'react';
import Links from './Links';

function Navbar() {
  return (
    <div className='flex items-center justify-between h-20 shadow-custom shadow-md px-4 md:px-8'>
      <a href='/'>
        <div className='flex items-center gap-2 hover:cursor-pointer'>
          <Image
            src='/assets/navbar/logo.png'
            width='65px'
            height='60px'
            className='drop-shadow-custom'
          />
          <h6 className='text-mint text-xl drop-shadow-custom'>Ioana Tiplea</h6>
        </div>
      </a>
      <Links />
    </div>
  );
}

export default Navbar;
