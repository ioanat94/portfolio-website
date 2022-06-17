import React from 'react';
import Skill from './Skill';

function FrontSkills() {
  return (
    <>
      <div>
        <div className='flex flex-col gap-10 md:items-center'>
          <h2 className='text-white text-xl text-center'>Front End</h2>
          <div className='grid grid-cols-3 gap-x-10 gap-y-8 items-end md:gap-x-8 md:gap-y-6 md:max-w-full'>
            <Skill
              name='JavaScript'
              url={'https://www.javascript.com/'}
              img={'/assets/stack/front/javascript.png'}
            />
            <Skill
              name='TypeScript'
              url={'https://www.typescriptlang.org/'}
              img={'/assets/stack/front/typescript.png'}
            />
            <Skill
              name='HTML5'
              url={'https://html.com/'}
              img={'/assets/stack/front/html.webp'}
            />
            <Skill
              name='CSS3'
              url={'https://www.w3.org/Style/CSS/'}
              img={'/assets/stack/front/css.webp'}
            />
            <Skill
              name='Sass'
              url={'https://sass-lang.com/'}
              img={'/assets/stack/front/sass.png'}
            />
            <Skill
              name='Material UI'
              url={'https://mui.com/'}
              img={'/assets/stack/front/materialui.png'}
            />
            <Skill
              name='Tailwind CSS'
              url={'https://tailwindcss.com/'}
              img={'/assets/stack/front/tailwindcss.png'}
            />
            <Skill
              name='React.js'
              url={'https://reactjs.org/'}
              img={'/assets/stack/front/react.png'}
            />
            <Skill
              name='Redux'
              url={'https://redux.js.org/'}
              img={'/assets/stack/front/redux.png'}
            />
            <Skill
              name='Next.js'
              url={'https://nextjs.org/'}
              img={'/assets/stack/front/nextjs.png'}
            />
            <Skill
              name='Figma'
              url={'https://www.figma.com/'}
              img={'/assets/stack/front/figma.png'}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontSkills;
