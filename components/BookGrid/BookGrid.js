import React from 'react';

import Link from 'next/link';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles/index';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';

import BookCard from '../BookCard';

const styles = {
  grid: {
    padding: '30px'
  },
  item: {
    padding: '10px'
  },
  link: {
    textDecoration: 'none',
    outline: 0
  },
  hide: {
    display: 'none'
  }
};

class BookGrid extends React.Component {
  render() {
    const { classes, searchTerm, books } = this.props;
    return (
      <>
        <Grid className={classes.grid} container justify="space-around" alignContent="space-between">
          {books.map((book, index) => {
            const isMatch = `${book.title}${book.author}${book.isbn}`.toLowerCase().includes(searchTerm.toLowerCase());
            return (
              <Grow in timeout={Math.min(250 + 250 * index, 1500)} key={book.isbn}>
                <Grid
                  className={classNames(classes.item, { [classes.hide]: !isMatch })}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  xl={3}
                >
                  <Link prefetch href={`/book?title=${book.title}&isbn=${book.isbn}`} as="/book">
                    <a className={classes.link}>
                      <BookCard book={book} />
                    </a>
                  </Link>
                </Grid>
              </Grow>
            );
          })}
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(BookGrid);
