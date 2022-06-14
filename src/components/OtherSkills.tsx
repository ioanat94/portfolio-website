import Image from 'next/image';
import React from 'react';

function OtherSkills() {
  return (
    <>
      <div>
        <div className='flex flex-col gap-5 self-start md:items-center'>
          <h2 className='text-white text-xl'>Other</h2>
          <div className='grid grid-cols-3 gap-y-5 max-w-[75%] md:gap-x-8 md:max-w-full'>
            <div className='flex items-center'>
              <Image
                src='/assets/stack/other/webpack.jpg'
                width='50px'
                height='50px'
                className='rounded-full'
              />
            </div>
            <div className='flex items-center'>
              <Image
                src='/assets/stack/other/jest.png'
                width='50px'
                height='50px'
                className='rounded-full'
              />
            </div>
            <div className='flex items-center'>
              <Image
                src='/assets/stack/other/heroku.jpg'
                width='50px'
                height='50px'
                className='rounded-full'
              />
            </div>
            <div className='flex items-center'>
              <Image
                src='/assets/stack/other/git.png'
                width='50px'
                height='50px'
                className='rounded-full'
              />
            </div>
            <div className='flex items-center'>
              <Image
                src='/assets/stack/other/github.webp'
                width='50px'
                height='50px'
                className='rounded-full'
              />
            </div>
            <div className='flex items-center'>
              <Image
                src='/assets/stack/other/firebase.png'
                width='50px'
                height='50px'
                className='rounded-full'
              />
            </div>
            <div className='flex items-center'>
              <Image
                src='/assets/stack/other/vscode.png'
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

export default OtherSkills;
