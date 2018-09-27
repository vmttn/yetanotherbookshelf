// @flow

import React from 'react';

import { connect } from 'react-redux';
import { setSearchTerm } from '../../lib/store/actions';

import SearchInput from './SearchInput';

const SearchInputContainer = props => {
  const { bookList } = props;
  return <SearchInput {...props} options={bookList} />;
};

const mapStateToProps = state => ({ searchTerm: state.searchTerm, bookList: state.bookList });

const mapDispatchToProps = dispatch => ({
  handleInputChange: value => {
    dispatch(setSearchTerm(value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInputContainer);
