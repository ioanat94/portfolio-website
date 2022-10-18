import React from 'react';
import Project from './Project';

function Projects() {
  return (
    <>
      <a className='anchor anchor-projects' id='projects'></a>
      <div className='flex flex-col p-6 pt-0 gap-5 mt-10 md:max-w-6xl md:mx-auto md:justify-between'>
        <h1 className='text-mint text-4xl'>Projects</h1>
        <div className='text-white font-light '>
          Below is a sample of my most recent projects.
          <br />
          Check out the rest of my work on{' '}
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
        <div className='flex flex-col gap-10 justify-evenly mt-2 md:mt-6 md:flex-row md:flex-wrap md:justify-between lg:flex-nowrap'>
          <Project
            img={'/assets/projects/petlify.png'}
            title={'Petlify'}
            gitLink={'https://github.com/ioanat94/petlify'}
            liveLink={'https://petlify.vercel.app/'}
            desc={
              'A pet shop application written using Typescript, React.js, Redux Toolkit, Node.js, MongoDB and Tailwind CSS. Users can sign in with Google, edit their profile, and order products. The app also features an admin dashboard which allows admins to view, create, modify and delete products, orders, users and admins.'
            }
          />
          <Project
            img={'/assets/projects/burgrrr.png'}
            title={'burGRRR'}
            gitLink={'https://github.com/ioanat94/burgrrr'}
            liveLink={'https://burgrrr.vercel.app/'}
            desc={
              'A landing page/food ordering app for a fictional burger restaurant written using Typescript, React.js, Next.js, MongoDB and Tailwind CSS. Users are able to select products they want to order, various options for their order, and checkout using Paypal or cash. Also features an admin dashboard which allows admins to view, create, modify and delete products and orders.'
            }
          />
          <Project
            img={'/assets/projects/netflix.png'}
            title={'Netflix Clone'}
            gitLink={'https://github.com/ioanat94/netflix'}
            liveLink={'https://netflix-clone-it.herokuapp.com/'}
            desc={
              'Netflix clone written using the MERN stack. Features a client side which allows users to register, login, browse and watch content categorized by type (movie or series) and genre. Also features an admin dashboard which is a fully functional CMS that allows admins to view, create, modify and delete users, content and content lists.'
            }
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
