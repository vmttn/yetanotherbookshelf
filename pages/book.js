import React from 'react';

import fetch from 'isomorphic-unfetch';

import AppBar from '../components/AppBar';
import BookDetail from '../components/BookDetail';

function Book(props) {
  return (
    <>
      <AppBar />
      <BookDetail {...props} />
    </>
  );
}

const baseParams = {
  action: 'query',
  format: 'json',
  prop: 'extracts',
  generator: 'search',
  exsentences: '5',
  explaintext: 1,
  gsrlimit: '1',
  origin: '*'
};

Book.getInitialProps = async ({ query }) => {
  const params = { gsrsearch: query.title, ...baseParams };
  const baseApiUrl = 'https://fr.wikipedia.org/w/api.php';

  const url = `${baseApiUrl}?${Object.keys(params)
    .map(k => `${k}=${params[k]}`)
    .join('&')}`;

  const response = await fetch(url, { mode: 'cors' });
  const json = await response.json();
  const data = json.query.pages[Object.keys(json.query.pages)];

  return {
    title: query.title,
    isbn: query.isbn,
    descr: data.extract
  };
};

export default Book;
