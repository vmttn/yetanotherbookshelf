import React from 'react';

import Link from 'next/link';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import SearchInput from './SearchInput';

const styles = theme => ({
  appBar: {
    position: 'sticky',
    background: `linear-gradient(45deg, ${theme.palette.primary.dark} 20%, ${theme.palette.primary.light} 80%)`
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  rightContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  linkContainer: {
    margin: 'auto 1em auto 1em'
  }
});

const ApplicationBar = ({ classes, withSearch }) => (
  <AppBar className={classes.appBar}>
    <ToolBar className={classes.toolBar}>
      <Link href="/">
        <a>
          <Typography variant="title" noWrap>
            Yet Another Bookshelf
          </Typography>
        </a>
      </Link>
      {withSearch && <SearchInput />}
      <div className={classes.rightContainer}>
        <div className={classes.linkContainer}>
          <a href="https://github.com/vmttn">
            <Typography variant="title" noWrap>
              GitHub
            </Typography>
          </a>
        </div>

        <div className={classes.linkContainer}>
          <Link href="/about">
            <a>
              <Typography variant="title" noWrap>
                About
              </Typography>
            </a>
          </Link>
        </div>
      </div>
    </ToolBar>
  </AppBar>
);

export default withStyles(styles)(ApplicationBar);
