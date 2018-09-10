import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

import { connect } from 'react-redux';
import { setSearchTerm } from '../lib/store/actions';

const styles = {
  textField: {
    color: 'inherit'
  }
};

function SearchInput(props) {
  const { classes, handleInputChange, searchTerm } = props;
  return (
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
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

const mapDispatchToProps = dispatch => ({
  handleInputChange: value => {
    dispatch(setSearchTerm(value));
  }
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchInput)
);
