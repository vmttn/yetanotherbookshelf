// @flow

import React from 'react';

import { connect } from 'react-redux';

import BookGrid from './BookGrid';

const BookGridContainer = ({ searchTerm, books }: { searchTerm: string, books: Array<bookType> }) => (
  <BookGrid searchTerm={searchTerm} books={books} />
);

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

export default connect(mapStateToProps)(BookGridContainer);
