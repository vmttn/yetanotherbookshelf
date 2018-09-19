// @flow

import React from 'react';

import fetch from 'isomorphic-unfetch';

import AppBar from '../components/AppBar';
import BookGrid from '../components/BookGrid';

function Index({ books }: { books: Array<bookType> }) {
  return (
    <>
      <AppBar withSearch />
      <BookGrid books={books} />
    </>
  );
}

Index.getInitialProps = async ({ req }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
  const response = await fetch(`${baseUrl}/api/v1/public/book`);
  const data = await response.json();
  return { books: data };
};

export default Index;
