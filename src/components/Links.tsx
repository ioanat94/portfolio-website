import React from 'react';
import Link from './Link';

function Links() {
  return (
    <div>
      <div className='hidden md:flex md:gap-8'>
        <Link name={'About'} />
        <Link name={'Skills'} />
        <Link name={'Projects'} />
        <Link name={'Contact'} />
      </div>
    </div>
  );
}

export default Links;
