import Image from 'next/image';
import React from 'react';
import Link from './Link';

function Navbar() {
  return (
    <div className='flex items-center justify-between h-20'>
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
      <div className='hidden md:flex md:gap-8'>
        <Link name={'About'} />
        <Link name={'Skills'} />
        <Link name={'Projects'} />
        <Link name={'Contact'} />
      </div>
    </div>
  );
}

export default Navbar;
