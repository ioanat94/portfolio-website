import React from 'react';
import Link from './Link';

function Links() {
  const toggleMenu = () => {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');

    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
  };

  return (
    <>
      <div>
        <div className='hidden md:flex md:gap-8'>
          <Link name={'About'} />
          <Link name={'Skills'} />
          <Link name={'Projects'} />
          <Link name={'Contact'} />
        </div>
        <button
          id='menu-btn'
          onClick={toggleMenu}
          className='block hamburger md:hidden focus:outline-none'
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-mid'></span>
          <span className='hamburger-bot'></span>
        </button>
      </div>
      <div className='md:hidden'>
        <div
          id='menu'
          className='absolute hidden flex-col items-center w-1/2 mx-auto top-14 right-8 py-6 space-y-6 bg-darkerBlue'
        >
          <Link name={'About'} />
          <Link name={'Skills'} />
          <Link name={'Projects'} />
          <Link name={'Contact'} />
        </div>
      </div>
    </>
  );
}

export default Links;
