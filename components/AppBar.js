import Link from 'next/link';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = {
  link: {
    '&:link': {
      textDecoration: 'none',
    },
    '&:visited': {
      color: 'inherit',
    }
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between'
  }
};

function MyAppBar({classes, children}) {
  return (
    <AppBar position="static">
      <ToolBar className={classes.toolBar}>
        <Typography variant="title" color="inherit" noWrap>
          <Link href="/"><a className={classes.link}>Yet Another Bookshelf</a></Link>
        </Typography>

        {children}

        <Typography variant="title" color="inherit" noWrap>
          <Link href="/about"><a className={classes.link}>About</a></Link>
        </Typography>
      </ToolBar>
    </AppBar>
  )
}

export default withStyles(styles)(MyAppBar);