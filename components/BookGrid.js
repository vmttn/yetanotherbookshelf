import React from 'react';

import { connect } from 'react-redux';
import fetch from 'isomorphic-unfetch';

import { withStyles } from '@material-ui/core/styles/index';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';

import BookCard from './BookCard';

const styles = {
  grid: {
    padding: '15px'
  },
  item: {
    padding: '10px'
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
      `${book.title}${book.description}${book.author}${book.isbn}`.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
      <Grid className={classes.grid} container justify="space-around" alignContent="space-between">
        {fb.map(book => (
          <Grid className={classes.item} item key={book.isbn} xs={12} md={6} xl={4}>
            <Slide direction="up" in={true}>
              <BookCard book={book} />
            </Slide>
          </Grid>
        ))}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

export default withStyles(styles)(connect(mapStateToProps)(BookGrid));
