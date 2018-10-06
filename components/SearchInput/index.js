// @flow

import React from 'react';

import { connect } from 'react-redux';
import { setSearchTerm } from '../../lib/store/actions';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import SearchInput from './SearchInput';

const GET_BOOKS_QUERY = gql`
  {
    books {
      isbn
      title
    }
  }
`;

const SearchInputContainer = props => (
  <Query query={GET_BOOKS_QUERY}>{({ data }) => <SearchInput {...props} options={data.books || []} />}</Query>
);

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

const mapDispatchToProps = dispatch => ({
  handleInputChange: value => {
    dispatch(setSearchTerm(value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInputContainer);
