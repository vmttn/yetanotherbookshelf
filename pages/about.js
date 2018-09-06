import Typography from '@material-ui/core/Typography';

import AppBar from '../components/AppBar';

function About() {
  return (
    <React.Fragment>
      <AppBar/>
      <Typography variant="headline">About YABookshelf !</Typography>
    </React.Fragment>
  );
}

export default About;