import React from 'react';

import { withStyles } from '@material-ui/core/styles/index';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';

import BookGridItem from './BookGridItem';

const styles = {
  grid: {
    padding: '30px'
  }
};

const BookGrid = ({ classes, searchTerm, books }) => (
  <Grid container className={classes.grid} justify="space-around" alignContent="space-between">
    {books.map((book, index) => {
      const searchMatch = `${book.title}${book.author}${book.isbn}`.toLowerCase().includes(searchTerm.toLowerCase());
      return (
        /* TODO: Fix Grow transition */
        <Grow in timeout={Math.min(250 + 250 * index, 1500)} key={book.isbn}>
          <BookGridItem book={book} hidden={!searchMatch} />
        </Grow>
      );
    })}
  </Grid>
);

export default withStyles(styles)(BookGrid);
