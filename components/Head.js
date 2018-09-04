import Head from 'next/head';

function MyHead() {
  return (
    <Head>
      <title>Yet Another Bookshelf</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
    </Head>
  )
}

export default MyHead;