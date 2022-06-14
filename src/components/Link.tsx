import React from 'react';

function Link({ name }) {
  return (
    <a
      href={`#${name.toLowerCase()}`}
      className='text-mint md:transition-all md:hover:text-mintLight'
    >
      {name}
    </a>
  );
}

export default Link;
