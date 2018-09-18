import React from 'react';

import { withStyles } from '@material-ui/core/styles/index';
import Input from '@material-ui/core/Input';

const styles = {
  textField: {
    width: '15%',
    color: 'inherit',
    padding: '2px',
    backgroundColor: 'rgba(255,255,255,.2)',
    borderRadius: '3px',
    transition: 'width 1s',
    webkitTransition: 'width 1s',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,.3)',
      width: '300px'
    }
  }
};

const SearchInput = ({ classes, handleInputChange, searchTerm }) => (
  <Input
    id="search"
    label="Search"
    placeholder="Search..."
    className={classes.textField}
    disableUnderline
    value={searchTerm}
    onChange={e => handleInputChange(e.target.value)}
  />
);

export default withStyles(styles)(SearchInput);
