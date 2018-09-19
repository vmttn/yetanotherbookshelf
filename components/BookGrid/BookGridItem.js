// @flow

import React from 'react';

import Link from 'next/link';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles/index';
import Grid from '@material-ui/core/Grid';

import BookCard from '../BookCard';

const styles = {
  item: {
    padding: '10px'
  },
  hidden: {
    display: 'none'
  }
};

type bookGridItemProps = {
  classes: Object,
  book: bookType,
  hidden: boolean
};

const BookGridItem = ({ classes, book, hidden }: bookGridItemProps) => (
  <Grid item className={classNames(classes.item, { [classes.hidden]: hidden })} xs={12} sm={6} md={4} xl={3}>
    <Link href={`/book?title=${book.title}&isbn=${book.isbn}`} as="/book">
      <a>
        <BookCard book={book} />
      </a>
    </Link>
  </Grid>
);

export default withStyles(styles)(BookGridItem);
