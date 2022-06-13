import { Main } from 'next/document';
import Head from 'next/head';
import { useRouter } from 'next/router';
import About from '../components/About';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

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
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Index;
