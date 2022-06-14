import React from 'react';
import Project from './Project';

function Projects() {
  return (
    <div
      id='projects'
      className='flex flex-col p-6 pt-0 gap-5 md:max-w-7xl md:mx-auto md:min-h-[40vh]'
    >
      <h1 className='text-mint text-4xl'>Projects</h1>
      <div className='text-white font-light '>
        Below are some of my most recent projects. All of my work is available
        on{' '}
        <a
          href='https://github.com/ioanat94'
          target='_blank'
          rel='noreferrer'
          className='text-mint font-normal transition-all hover:text-mintLight'
        >
          GitHub
        </a>
        .
      </div>
      <div className='flex flex-col gap-10 justify-evenly mt-2 md:mt-10 md:flex-row'>
        <Project
          img={'/assets/projects/netflix.png'}
          title={'Netflix Clone'}
          gitLink={'https://github.com/ioanat94/netflix'}
          liveLink={'https://netflix-clone-it.herokuapp.com/'}
          desc={
            'Netflix clone written using the MERN stack. Features a client side which allows users to register, login, browse and watch content categorized by type (movie or series) and genre. Also features an admin dashboard which is a fully functional CMS that allows admins to view, create, modify and delete users, content and content lists.'
          }
        />
        <Project
          img={'/assets/projects/portfolio.png'}
          title={'Portfolio Website'}
          gitLink={'https://github.com/ioanat94/portfolio-website'}
          liveLink={'https://www.google.com/'}
          desc={
            'My portfolio website, which you are looking at right now. The design was intended to be simple, clean and straightforward. Built with Tailwind CSS, Typescript and React.js/Next.js.'
          }
        />
      </div>
    </div>
  );
}

export default Projects;