import React from 'react';
import LinksFooter from './LinksFooter';

function Footer() {
  return (
    <div className='bg-darkerBlue h-20 flex items-center justify-center px-8 text-mint md:justify-between'>
      <div className='flex gap-2 items-center'>
        Made with{' '}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='#f73d3d'
        >
          <path
            fill-rule='evenodd'
            d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
            clip-rule='evenodd'
          />
        </svg>{' '}
        by Ioana Tiplea
      </div>

      <LinksFooter />
    </div>
  );
}

export default Footer;
