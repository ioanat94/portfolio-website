import Head from 'next/head';
import { useRouter } from 'next/router';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Index = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Ioana Tiplea</title>
      </Head>
      <div className='font-roboto bg-darkBlue'>
        <Navbar />
        <div className='w-screen md:container md:mx-auto'>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
