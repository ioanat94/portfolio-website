import Head from 'next/head';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Ioana Tiplea</title>
      </Head>
      <h1 className='font-roboto'>Hello world!</h1>
    </>
  );
};

export default Index;
