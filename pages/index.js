import React from 'react';

import AppBar from '../components/AppBar';
import BookGrid from '../components/BookGrid';

function Index() {
  return (
    <>
      <AppBar withSearch />
      <BookGrid />
    </>
  );
}

export default Index;
