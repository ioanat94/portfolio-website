import React from 'react';
import Skill from './Skill';

function OtherSkills() {
  return (
    <>
      <div>
        <div className='flex flex-col gap-10 self-start md:items-center'>
          <h2 className='text-white text-xl text-center'>Other</h2>
          <div className='grid grid-cols-3  gap-x-10 gap-y-8 items-end md:gap-x-8 md:gap-y-6 md:max-w-full'>
            <Skill
              name='Webpack'
              url={'https://webpack.js.org/'}
              img={'/assets/stack/other/webpack.jpg'}
            />
            <Skill
              name='Jest'
              url={'https://jestjs.io/'}
              img={'/assets/stack/other/jest.png'}
            />
            <Skill
              name='Heroku'
              url={'https://www.heroku.com/'}
              img={'/assets/stack/other/heroku.jpg'}
            />
            <Skill
              name='Git'
              url={'https://git-scm.com/'}
              img={'/assets/stack/other/git.png'}
            />
            <Skill
              name='GitHub'
              url={'https://github.com/'}
              img={'/assets/stack/other/github.webp'}
            />
            <Skill
              name='Firebase'
              url={'https://firebase.google.com/'}
              img={'/assets/stack/other/firebase.png'}
            />
            <Skill
              name='VSCode'
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
