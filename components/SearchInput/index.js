// @flow

import React from 'react';

import { connect } from 'react-redux';
import { setSearchTerm } from '../../lib/store/actions/search';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import SearchInput from './SearchInput';

const GET_BOOKS = gql`
  {
    books {
      isbn
      title
    }
  }
`;

const SearchInputContainer = props => (
  <Query query={GET_BOOKS}>{({ data }) => <SearchInput {...props} options={data.books || []} />}</Query>
);

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const actions = { handleInputChange: value => setSearchTerm(value) };

export default connect(
  mapStateToProps,
  actions
)(SearchInputContainer);
