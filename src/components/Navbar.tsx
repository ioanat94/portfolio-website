import Image from 'next/image';
import React from 'react';
import LinksNavbar from './LinksNavbar';

function Navbar() {
  return (
    <div
      id='navbar'
      className='sticky top-0 z-50 flex items-center justify-between h-20 bg-darkBlue shadow-md px-4 md:px-8'
    >
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
      <LinksNavbar />
    </div>
  );
}

export default Navbar;
