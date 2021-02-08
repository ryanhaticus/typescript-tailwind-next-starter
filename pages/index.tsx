import Head from 'next/head';

export function Home() {
  return (
    <div>
      <Head>
        <title>NextJS Starter</title>
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      </Head>
      <h1>This is the client!</h1>
    </div>
  );
}

export default Home;
