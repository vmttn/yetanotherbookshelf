// @flow

import React from 'react';

import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import { deleteBook } from '../lib/store/actions/books';

const styles = (theme: Object) => ({
  card: {
    display: 'flex',
    alignItems: 'center',
    height: '300px',
    '&:hover': {
      boxShadow: theme.shadows[5],
      transform: 'scale(1.015)'
    }
  },
  image: {
    width: '50%',
    height: '100%',
    objectFit: 'contain'
  },
  title: {
    marginBottom: 16
  },
  author: {
    marginBottom: 12
  }
});

type bookCardProps = {
  classes: Object,
  book: bookType,
  handleDelete: number => void
};

const BookCard = ({ classes, book, handleDelete }: bookCardProps) => (
  <Card className={classes.card}>
    <CardMedia
      component={() => <img className={classes.image} src={`/static/images/covers/${book.isbn}.jpg`} alt="" />}
      image={`/static/images/covers/${book.isbn}.jpg`}
      title={book.title}
    />
    <CardContent>
      <Typography className={classes.title} variant="title">
        {book.title}
      </Typography>
      <Typography className={classes.author} variant="subheading" color="textSecondary">
        {book.author}
      </Typography>
      <Button
        onClick={e => {
          e.preventDefault();
          handleDelete(book.isbn);
        }}
      >
        <DeleteIcon />
      </Button>
    </CardContent>
  </Card>
);

const mapDispatchToProps = dispatch => ({ handleDelete: id => dispatch(deleteBook(id)) });

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(BookCard));
