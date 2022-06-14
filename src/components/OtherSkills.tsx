import Image from 'next/image';
import React from 'react';
import Skill from './Skill';

function OtherSkills() {
  return (
    <>
      <div>
        <div className='flex flex-col gap-5 self-start md:items-center'>
          <h2 className='text-white text-xl text-center'>Other</h2>
          <div className='grid grid-cols-3 gap-5 md:gap-x-8 md:max-w-full'>
            <Skill
              url={'https://webpack.js.org/'}
              img={'/assets/stack/other/webpack.jpg'}
            />
            <Skill
              url={'https://jestjs.io/'}
              img={'/assets/stack/other/jest.png'}
            />
            <Skill
              url={'https://www.heroku.com/'}
              img={'/assets/stack/other/heroku.jpg'}
            />
            <Skill
              url={'https://git-scm.com/'}
              img={'/assets/stack/other/git.png'}
            />
            <Skill
              url={'https://github.com/'}
              img={'/assets/stack/other/github.webp'}
            />
            <Skill
              url={'https://firebase.google.com/'}
              img={'/assets/stack/other/firebase.png'}
            />
            <Skill
              url={'https://code.visualstudio.com/'}
              img={'/assets/stack/other/vscode.png'}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherSkills;
