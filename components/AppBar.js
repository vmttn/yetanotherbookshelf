import React from 'react';

import Link from 'next/link';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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
  }
});

function ApplicationBar(props) {
  const { classes, withSearch } = props;
  return (
    <AppBar className={classes.appBar}>
      <ToolBar className={classes.toolBar}>
        <StyledLink label="Yet Another Bookshelf" link="/" />
        {withSearch && <SearchInput />}
        <div className={classes.rightContainer}>
          <StyledLink label="GitHub" link="https://github.com/vmttn" />
          <StyledLink label="About" link="/about" />
        </div>
      </ToolBar>
    </AppBar>
  );
}

const linkStyles = {
  link: {
    outline: 0,
    margin: '10px',
    '&:link': {
      textDecoration: 'none'
    },
    '&:visited': {
      color: 'inherit'
    }
  }
};

const StyledLink = withStyles(linkStyles)(props => {
  const { label, link, classes } = props;
  return (
    <Typography variant="title" noWrap>
      <Link href={link}>
        <a className={classes.link}>{label}</a>
      </Link>
    </Typography>
  );
});

export default withStyles(styles)(ApplicationBar);
