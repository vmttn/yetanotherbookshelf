import Link from 'next/link';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import SearchInput from './SearchInput';

const styles = {
  appBar: {
    position: 'static',
  },
  link: {
    '&:link': {
      textDecoration: 'none',
    },
    '&:visited': {
      color: 'inherit',
    },
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

function ApplicationBar(props) {
  const { classes, withSearch } = props;
  return (
    <AppBar className={classes.appBar}>
      <ToolBar className={classes.toolBar}>

        <Typography variant="title" color="inherit" noWrap>
          <Link href="/">
            <a className={classes.link}>Yet Another Bookshelf</a>
          </Link>
        </Typography>

        {withSearch && (<SearchInput />)}

        <Typography variant="title" color="inherit" noWrap>
          <Link href="/about">
            <a className={classes.link}>About</a>
          </Link>
        </Typography>

      </ToolBar>
    </AppBar>
  );
}

export default withStyles(styles)(ApplicationBar);
