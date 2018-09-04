import Typography from '@material-ui/core/Typography';

import AppBar from '../components/AppBar';
import Head from '../components/Head';


function Landing() {
  return (
    <React.Fragment>
      <Head/>
      <AppBar/>

      <Typography variant="headline">
        This is a bookshelf !
      </Typography>
    </React.Fragment>
  );
}

export default Landing;