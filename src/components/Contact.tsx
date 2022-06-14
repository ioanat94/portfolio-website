import React from 'react';
import Socials from './Socials';

function Contact() {
  return (
    <>
      <a className='anchor' id='contact'></a>
      <div className='flex flex-col p-6 pt-0 gap-5 mt-10 md:max-w-6xl md:mx-auto'>
        <h1 className='text-mint text-4xl'>Contact</h1>
        <p className='text-white font-light'>
          Hiring?
          <br />
          Need a website?
          <br />
          Want to collaborate?
          <br />
          <br />
          Reach out to me via GitHub, LinkedIn or e-mail:
        </p>
        <Socials />
      </div>
    </>
  );
}

export default Contact;
