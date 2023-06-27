import React from 'react';
import Skill from './Skill';

function BackSkills() {
  return (
    <div className='md:w-1/3'>
      <div className='flex flex-col gap-10 self-start md:items-center'>
        <h2 className='text-white text-xl text-center'>Back End</h2>
        <div className='grid grid-cols-3 gap-x-10 gap-y-8 items-end md:gap-x-8 md:gap-y-6 md:w-max-w'>
          <Skill
            name='Node'
            url={'https://nodejs.org/en/'}
            img={'/assets/stack/back/nodejs.png'}
          />
          <Skill
            name='Express'
            url={'https://expressjs.com/'}
            img={'/assets/stack/back/expressjs.png'}
          />
          <Skill
            name='Java'
            url={'https://www.java.com/en/'}
            img={'/assets/stack/back/java.svg'}
          />
          <Skill
            name='Spring'
            url={'https://spring.io/'}
            img={'/assets/stack/back/spring.svg'}
          />
          <Skill
            name='PostgreSQL'
            url={'https://www.postgresql.org/'}
            img={'/assets/stack/back/postgresql.png'}
          />
          <Skill
            name='MongoDB'
            url={'https://www.mongodb.com/'}
            img={'/assets/stack/back/mongodb.webp'}
          />
          <Skill
            name='Prisma'
            url={'https://www.prisma.io/'}
            img={'/assets/stack/back/prisma.svg'}
          />
        </div>
      </div>
    </div>
  );
}

export default BackSkills;
