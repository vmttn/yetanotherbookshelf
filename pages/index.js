// @flow

import React from 'react';

import fetch from 'isomorphic-unfetch';

import { connect } from 'react-redux';
import { setBookList } from '../lib/store/actions';

import AppBar from '../components/AppBar';
import BookGrid from '../components/BookGrid';

class Index extends React.Component<{ books: Array<bookType> }> {
  componentDidMount() {
    const { books, populateBookList } = this.props;
    populateBookList(books);
  }

  render() {
    const { books } = this.props;
    return (
      <>
        <AppBar withSearch />
        <BookGrid books={books} />
      </>
    );
  }
}

Index.getInitialProps = async ({ req }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
  const response = await fetch(`${baseUrl}/api/v1/public/book`);
  const data = await response.json();
  return { books: data };
};

const mapDispatchToProps = dispatch => ({
  populateBookList: bookList => {
    dispatch(setBookList(bookList));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Index);
