import Link from 'next/link';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = {
  alignRight: {
    textAlign: 'right',
    flex: 1,
  },
  link: {
    '&:link': {
      textDecoration: 'none',
    },
    '&:visited': {
      color: 'white',
    }
  }
};

function MyAppBar(props) {
  const {classes} = props;
  return (
    <AppBar position="static">
      <ToolBar>
        <Typography variant="title" color="inherit">
          <Link href="/"><a className={classes.link}>Yet Another Bookshelf</a></Link>
        </Typography>
        <Typography variant="title" className={classes.alignRight}>
          <Link href="/about"><a className={classes.link}>About</a></Link>
        </Typography>
      </ToolBar>
    </AppBar>
  )
}

export default withStyles(styles)(MyAppBar);