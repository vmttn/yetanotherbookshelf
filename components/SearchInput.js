import React from 'react';

import {withStyles} from '@material-ui/core/styles'
import Input from '@material-ui/core/Input';

const styles = {
  textField: {
    color: "inherit"
  }
};

function SearchInput({classes, searchTerm}) {
  return (
    <Input
      id="search"
      label="Search"
      placeholder="Search..."
      className={classes.textField}
      disableUnderline={true}
      value={searchTerm}
    />
  )
}

export default withStyles(styles)(SearchInput);