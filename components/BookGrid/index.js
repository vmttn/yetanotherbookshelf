// @flow

import React from 'react';

import { connect } from 'react-redux';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import BookGrid from './BookGrid';

const GET_BOOKS = gql`
  {
    books {
      isbn
      title
      author
    }
  }
`;

function BookGridContainer({ searchTerm }: { searchTerm: string }) {
  return <Query query={GET_BOOKS}>{({ data }) => <BookGrid searchTerm={searchTerm} books={data.books || []} />}</Query>;
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

export default connect(mapStateToProps)(BookGridContainer);
