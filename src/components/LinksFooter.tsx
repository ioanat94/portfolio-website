import React from 'react';
import Link from './Link';

function Links() {
  return (
    <div className='hidden md:flex md:flex-row md:gap-8'>
      <Link name={'About'} />
      <Link name={'Skills'} />
      <Link name={'Projects'} />
      <Link name={'Contact'} />
      <Link name={'Blog'} />
    </div>
  );
}

export default Links;
