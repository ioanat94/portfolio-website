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
              <Image
                src='/assets/stack/front/javascript.png'
                width='50px'
                height='50px'
                className='rounded-full'
              />
            </div>
            <div className='flex items-center'>
              <Image
                src='/assets/stack/front/typescript.png'
                width='50px'
                height='50px'
                className='rounded-full'
              />
            </div>
            <div className='flex items-center'>
              <Image
                src='/assets/stack/front/html.webp'
                width='50px'
                height='50px'
              />
            </div>
            <div className='flex items-center'>
              <Image
                src='/assets/stack/front/css.webp'
                width='50px'
                height='50px'
              />
            </div>
            <div className='flex items-center'>
              <Image
                src='/assets/stack/front/sass.png'
                width='50px'
                height='50px'
              />
            </div>
            <div className='flex items-center'>
              <Image
                src='/assets/stack/front/materialui.png'
                width='50px'
                height='50px'
                className='rounded-full'
              />
            </div>
            <div className='flex items-center'>
              <Image
                src='/assets/stack/front/tailwindcss.png'
                width='50px'
                height='50px'
                className='rounded-full'
              />
            </div>
            <div className='flex items-center'>
              <Image
                src='/assets/stack/front/react.png'
                width='50px'
                height='50px'
                className='rounded-full'
              />
            </div>
            <div className='flex items-center'>
              <Image
                src='/assets/stack/front/redux.png'
                width='50px'
                height='50px'
                className='rounded-full'
              />
            </div>
            <div className='flex items-center'>
              <Image
                src='/assets/stack/front/nextjs.png'
                width='50px'
                height='50px'
              />
            </div>
            <div className='flex items-center'>
              <Image
                src='/assets/stack/front/figma.png'
                width='50px'
                height='50px'
                className='rounded-full'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontSkills;
