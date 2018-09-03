import Head from 'next/head';

import Typography from '@material-ui/core/Typography';

function Landing() {
  return (

    <React.Fragment>

      <Head>
        <title>Yet Another Bookshelf</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
      </Head>

      <Typography>
        This is a bookshelf.
      </Typography>

    </React.Fragment>
  );
}

export default Landing;