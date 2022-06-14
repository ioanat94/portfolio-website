import React from 'react';
import FrontSkills from './FrontSkills';
import BackSkills from './BackSkills';
import OtherSkills from './OtherSkills';

function Skills() {
  return (
    <div
      id='skills'
      className='flex flex-col p-6 pt-0 gap-5 md:max-w-7xl md:min-h-[40vh]'
    >
      <h1 className='text-mint text-4xl'>Skills</h1>
      <div className='flex flex-col gap-10 md:flex-row md:justify-evenly md:gap-20'>
        <FrontSkills />
        <BackSkills />
        <OtherSkills />
      </div>
    </div>
  );
}

export default Skills;
