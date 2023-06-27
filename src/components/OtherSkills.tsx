import React from 'react';
import Skill from './Skill';

function OtherSkills() {
  return (
    <div className='md:w-1/3'>
      <div className='flex flex-col gap-10 self-start md:items-center'>
        <h2 className='text-white text-xl text-center'>Other</h2>
        <div className='grid grid-cols-3 gap-x-10 gap-y-8 items-end md:gap-x-8 md:gap-y-6 md:w-max-w'>
          <Skill
            name='Jest'
            url={'https://jestjs.io/'}
            img={'/assets/stack/other/jest.png'}
          />
          <Skill
            name='Cypress'
            url={'https://www.cypress.io/'}
            img={'/assets/stack/other/cypress.jpg'}
          />
          <Skill
            name='Git'
            url={'https://git-scm.com/'}
            img={'/assets/stack/other/git.png'}
          />
          <Skill
            name='Docker'
            url={'https://www.docker.com/'}
            img={'/assets/stack/other/docker.svg'}
          />
          <Skill
            name='Figma'
            url={'https://www.figma.com/'}
            img={'/assets/stack/other/figma.png'}
          />
          <Skill
            name='Jira'
            url={'https://www.atlassian.com/software/jira'}
            img={'/assets/stack/other/jira.png'}
          />
        </div>
      </div>
    </div>
  );
}

export default OtherSkills;
