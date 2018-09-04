import Typography from '@material-ui/core/Typography';

import Head from '../components/Head';
import AppBar from '../components/AppBar';

function About() {
  return (
    <React.Fragment>
      <Head/>
      <AppBar/>
      <Typography variant="headline">About YABookshelf !</Typography>
    </React.Fragment>
  );
}

export default About;