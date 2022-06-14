import Image from 'next/image';
import React from 'react';
import LinksFooter from './LinksFooter';

function Footer() {
  return (
    <div className='bg-darkerBlue h-20 flex items-center justify-center px-8 text-mint md:justify-between'>
      <div className='flex gap-2 items-center'>
        Made with
        <Image
          src='/assets/other/heart.png'
          width='22px'
          height='22px'
          alt='Heart'
        />
        by Ioana Tiplea
      </div>

      <LinksFooter />
    </div>
  );
}

export default Footer;
