import Head from 'next/head';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Portfolio Website</title>
      </Head>
      <div>Hello</div>
    </>
  );
};

export default Index;
