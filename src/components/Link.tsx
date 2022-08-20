import React from 'react';

function Link({ name }) {
  const toggleMenu = () => {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
  };

  return (
    <a
      href={
        name === 'Blog'
          ? 'https://blog.ioanatiplea.dev'
          : `#${name.toLowerCase()}`
      }
      className='text-mint md:transition-all md:hover:text-mintLight'
      onClick={toggleMenu}
    >
      {name}
    </a>
  );
}

export default Link;
