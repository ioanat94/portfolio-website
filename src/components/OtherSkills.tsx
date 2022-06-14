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
              <a
                href='https://webpack.js.org/'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='/assets/stack/other/webpack.jpg'
                  width='50px'
                  height='50px'
                  className='rounded-full transition-all hover:opacity-50'
                />
              </a>
            </div>
            <div className='flex items-center'>
              <a href='https://jestjs.io/' target='_blank' rel='noreferrer'>
                <Image
                  src='/assets/stack/other/jest.png'
                  width='50px'
                  height='50px'
                  className='rounded-full transition-all hover:opacity-50'
                />
              </a>
            </div>
            <div className='flex items-center'>
              <a
                href='https://www.heroku.com/'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='/assets/stack/other/heroku.jpg'
                  width='50px'
                  height='50px'
                  className='rounded-full transition-all hover:opacity-50'
                />
              </a>
            </div>
            <div className='flex items-center'>
              <a href='https://git-scm.com/' target='_blank' rel='noreferrer'>
                <Image
                  src='/assets/stack/other/git.png'
                  width='50px'
                  height='50px'
                  className='rounded-full transition-all hover:opacity-50'
                />
              </a>
            </div>
            <div className='flex items-center'>
              <a href='https://github.com/' target='_blank' rel='noreferrer'>
                <Image
                  src='/assets/stack/other/github.webp'
                  width='50px'
                  height='50px'
                  className='rounded-full transition-all hover:opacity-50'
                />
              </a>
            </div>
            <div className='flex items-center'>
              <a
                href='https://firebase.google.com/'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='/assets/stack/other/firebase.png'
                  width='50px'
                  height='50px'
                  className='rounded-full transition-all hover:opacity-50'
                />
              </a>
            </div>
            <div className='flex items-center'>
              <a
                href='https://code.visualstudio.com/'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='/assets/stack/other/vscode.png'
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

export default OtherSkills;
