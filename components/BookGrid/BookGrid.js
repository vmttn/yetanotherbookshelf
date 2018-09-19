// @flow

import React from 'react';

import { withStyles } from '@material-ui/core/styles/index';
import Grid from '@material-ui/core/Grid';

import BookGridItem from './BookGridItem';

const styles = {
  grid: {
    padding: '30px'
  }
};

type BookGridProps = {
  classes: Object,
  searchTerm: string,
  books: Array<bookType>
};

const BookGrid = ({ classes, searchTerm, books }: BookGridProps) => (
  <Grid container className={classes.grid} justify="space-around" alignContent="space-between">
    {books.map(book => {
      const searchMatch = `${book.title}${book.author}${book.isbn}`.toLowerCase().includes(searchTerm.toLowerCase());
      return <BookGridItem book={book} hidden={!searchMatch} key={book.isbn} />;
    })}
  </Grid>
);

export default withStyles(styles)(BookGrid);
