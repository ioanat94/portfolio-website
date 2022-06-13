import React from 'react';

function Link({ name }) {
  return (
    <a
      href={`#${name.toLowerCase()}`}
      className='text-mint transition-all hover:text-mintLight'
    >
      {name}
    </a>
  );
}

export default Link;
