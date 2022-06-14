import React from 'react';
import Skill from './Skill';

function BackSkills() {
  return (
    <>
      <div>
        <div className='flex flex-col gap-5 self-start md:items-center'>
          <h2 className='text-white text-xl text-center'>Back End</h2>
          <div className='grid grid-cols-3 gap-5 md:gap-x-8 md:max-w-full'>
            <Skill
              url={'https://nodejs.org/en/'}
              img={'/assets/stack/back/nodejs.png'}
            />
            <Skill
              url={'https://expressjs.com/'}
              img={'/assets/stack/back/expressjs.png'}
            />
            <Skill
              url={'https://www.mongodb.com/'}
              img={'/assets/stack/back/mongodb.webp'}
            />
            <Skill
              url={'https://mongoosejs.com/'}
              img={'/assets/stack/back/mongoose.png'}
            />
            <Skill url={'https://jwt.io/'} img={'/assets/stack/back/jwt.png'} />
            <Skill
              url={'https://www.postman.com/'}
              img={'/assets/stack/back/postman.png'}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BackSkills;
