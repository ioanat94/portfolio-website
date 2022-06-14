import React from 'react';
import FrontSkills from './FrontSkills';
import BackSkills from './BackSkills';
import OtherSkills from './OtherSkills';

function Skills() {
  return (
    <>
      <a className='anchor anchor-skills' id='skills'></a>
      <div className='flex flex-col p-6 pt-0 md:max-w-6xl md:mx-auto md:mt-16 lg:-mt-6'>
        <h1 className='text-mint text-4xl'>Skills</h1>
        <div className='flex flex-col items-center gap-10 mt-10 md:flex-row md:items-start md:justify-between md:gap-20 lg:gap-40'>
          <FrontSkills />
          <BackSkills />
          <OtherSkills />
        </div>
      </div>
    </>
  );
}

export default Skills;
