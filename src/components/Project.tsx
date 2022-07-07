import Image from 'next/image';
import React from 'react';

function Project({ img, title, gitLink, liveLink, desc }) {
  return (
    <div className='flex flex-col w-full min-h-[674px] gap-5 text-white font-light bg-darkerBlue rounded-md shadow-2xl md:w-[50%] lg:w-[35%]'>
      <Image
        src={img}
        width='300px'
        height='200px'
        className='object-cover object-top rounded-t-md'
        alt='Project Screenshot'
      />
      <div className='flex flex-col gap-5'>
        <div className='flex items-center justify-between p-5 pt-2 md:flex-row md:gap-0 lg:flex-col lg:gap-4 xl:flex-row xl:gap-0'>
          <h2 className='text-mint font-normal text-xl'>{title}</h2>
          <div className='flex items-center gap-5'>
            <a
              href={gitLink}
              target='_blank'
              rel='noreferrer'
              className='h-[30px]'
            >
              <Image
                src='/assets/other/github-white.png'
                width='30px'
                height='30px'
                className='cursor-pointer md:transition-all md:hover:opacity-50'
                alt='GitHub Icon'
              />
            </a>
            <a href={liveLink} target='_blank' rel='noreferrer'>
              <span className='text-mint text-sm font-normal border-solid border border-mint rounded py-0.5 px-2 md:transition-all md:hover:text-darkBlue md:hover:bg-mint md:hover:border-darkerBlue'>
                LIVE
              </span>
            </a>
          </div>
        </div>
        <div className='px-5 pb-10'>{desc}</div>
      </div>
    </div>
  );
}

export default Project;
