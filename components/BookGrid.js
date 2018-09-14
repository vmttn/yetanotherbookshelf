import React from 'react';

import { connect } from 'react-redux';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import { withStyles } from '@material-ui/core/styles/index';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';

import BookCard from './BookCard';

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
  }
};

class BookGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    fetch('/api/v1/public/book')
      .then(res => res.json())
      .then(data => this.setState({ books: data }));
  }

  render() {
    const { classes, searchTerm } = this.props;
    const { books } = this.state;
    const fb = books.filter(book =>
      `${book.title}${book.author}${book.isbn}`.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
      <>
        <Grid className={classes.grid} container justify="space-around" alignContent="space-between">
          {fb.map((book, index) => (
            <Grid className={classes.item} item key={book.isbn} xs={12} md={6} xl={3}>
              <Link prefetch href={`/book?title=${book.title}&isbn=${book.isbn}`} as="/book">
                <a className={classes.link}>
                  <Slide direction="right" in timeout={750 + 500 * Math.floor(index / 3)}>
                    <BookCard book={book} />
                  </Slide>
                </a>
              </Link>
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

export default withStyles(styles)(connect(mapStateToProps)(BookGrid));
