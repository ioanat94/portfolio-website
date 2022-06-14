import Image from 'next/image';
import React from 'react';

function BackSkills() {
  return (
    <>
      <div>
        <div className='flex flex-col gap-5 self-start md:items-center'>
          <h2 className='text-white text-xl'>Back End</h2>
          <div className='grid grid-cols-3 gap-y-5 max-w-[75%] md:gap-x-8 md:max-w-full'>
            <div className='flex items-center'>
              <Image
                src='/assets/stack/back/nodejs.png'
                width='50px'
                height='50px'
              />
            </div>
            <div className='flex items-center'>
              <Image
                src='/assets/stack/back/expressjs.png'
                width='50px'
                height='50px'
                className='rounded-full'
              />
            </div>
            <div className='flex items-center'>
              <Image
                src='/assets/stack/back/mongodb.webp'
                width='50px'
                height='50px'
                className='rounded-full'
              />
            </div>
            <div className='flex items-center'>
              <Image
                src='/assets/stack/back/mongoose.png'
                width='50px'
                height='50px'
                className='rounded-full'
              />
            </div>
            <div className='flex items-center'>
              <Image
                src='/assets/stack/back/jwt.png'
                width='50px'
                height='50px'
                className='rounded-full'
              />
            </div>
            <div className='flex items-center'>
              <Image
                src='/assets/stack/back/postman.png'
                width='50px'
                height='50px'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BackSkills;
