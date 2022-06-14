import React from 'react';
import FrontSkills from './FrontSkills';
import BackSkills from './BackSkills';
import OtherSkills from './OtherSkills';

function Skills() {
  return (
    <div
      id='skills'
      className='flex flex-col p-6 pt-0 md:max-w-6xl md:mx-auto md:min-h-[40vh]'
    >
      <h1 className='text-mint text-4xl'>Skills</h1>
      <div className='flex flex-col items-center gap-10 mt-5 md:flex-row md:items-start md:justify-between md:gap-40 md:mt-5'>
        <FrontSkills />
        <BackSkills />
        <OtherSkills />
      </div>
    </div>
  );
}

export default Skills;
