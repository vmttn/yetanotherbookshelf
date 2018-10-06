// @flow

import React from 'react';

import AppBar from '../components/AppBar';
import BookGrid from '../components/BookGrid';

const Index = () => (
  <>
    <AppBar withSearch />
    <BookGrid />
  </>
);

export default Index;
