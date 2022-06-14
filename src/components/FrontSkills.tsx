import Image from 'next/image';
import React from 'react';

function FrontSkills() {
  return (
    <>
      <div>
        <div className='flex flex-col gap-5 md:items-center'>
          <h2 className='text-white text-xl'>Front End</h2>
          <div className='grid grid-cols-3 gap-y-5 max-w-[75%] md:gap-x-8 md:max-w-full'>
            <div className='flex items-center'>
              <a
                href='https://www.javascript.com/'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='/assets/stack/front/javascript.png'
                  width='50px'
                  height='50px'
                  className='rounded-full transition-all hover:opacity-50'
                />
              </a>
            </div>
            <div className='flex items-center'>
              <a
                href='https://www.typescriptlang.org/'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='/assets/stack/front/typescript.png'
                  width='50px'
                  height='50px'
                  className='rounded-full transition-all hover:opacity-50'
                />
              </a>
            </div>
            <div className='flex items-center'>
              <a href='https://html.com/' target='_blank' rel='noreferrer'>
                <Image
                  src='/assets/stack/front/html.webp'
                  width='50px'
                  height='50px'
                  className='transition-all hover:opacity-50'
                />
              </a>
            </div>
            <div className='flex items-center'>
              <a
                href='https://www.w3.org/Style/CSS/'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='/assets/stack/front/css.webp'
                  width='50px'
                  height='50px'
                  className='transition-all hover:opacity-50'
                />
              </a>
            </div>
            <div className='flex items-center'>
              <a href='https://sass-lang.com/' target='_blank' rel='noreferrer'>
                <Image
                  src='/assets/stack/front/sass.png'
                  width='50px'
                  height='50px'
                  className='transition-all hover:opacity-50'
                />
              </a>
            </div>
            <div className='flex items-center'>
              <a href='https://mui.com/' target='_blank' rel='noreferrer'>
                <Image
                  src='/assets/stack/front/materialui.png'
                  width='50px'
                  height='50px'
                  className='rounded-full transition-all hover:opacity-50'
                />
              </a>
            </div>
            <div className='flex items-center'>
              <a
                href='https://tailwindcss.com/'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='/assets/stack/front/tailwindcss.png'
                  width='50px'
                  height='50px'
                  className='rounded-full transition-all hover:opacity-50'
                />
              </a>
            </div>
            <div className='flex items-center'>
              <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
                <Image
                  src='/assets/stack/front/react.png'
                  width='50px'
                  height='50px'
                  className='rounded-full transition-all hover:opacity-50'
                />
              </a>
            </div>
            <div className='flex items-center'>
              <a href='https://redux.js.org/' target='_blank' rel='noreferrer'>
                <Image
                  src='/assets/stack/front/redux.png'
                  width='50px'
                  height='50px'
                  className='rounded-full transition-all hover:opacity-50'
                />
              </a>
            </div>
            <div className='flex items-center'>
              <a href='https://nextjs.org/' target='_blank' rel='noreferrer'>
                <Image
                  src='/assets/stack/front/nextjs.png'
                  width='50px'
                  height='50px'
                  className='transition-all hover:opacity-50'
                />
              </a>
            </div>
            <div className='flex items-center'>
              <a href='https://www.figma.com/' target='_blank' rel='noreferrer'>
                <Image
                  src='/assets/stack/front/figma.png'
                  width='50px'
                  height='50px'
                  className='rounded-full transition-all hover:opacity-50'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontSkills;
