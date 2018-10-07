// @flow

import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

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
  book: bookType
};

const DELETE_BOOK = gql`
  mutation DeleteBook($isbn: String!) {
    deleteBook(isbn: $isbn)
  }
`;

const GET_BOOKS = gql`
  {
    books {
      isbn
    }
  }
`;

const BookCard = ({ classes, book }: bookCardProps) => (
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
      <Mutation
        mutation={DELETE_BOOK}
        ignoreResults
        update={cache => {
          const { books } = cache.readQuery({ query: GET_BOOKS });
          cache.writeQuery({
            query: GET_BOOKS,
            data: { books: books.filter(b => b.isbn !== book.isbn) }
          });
        }}
      >
        {deleteBook => (
          <Button
            onClick={e => {
              e.preventDefault();
              deleteBook({ variables: { isbn: book.isbn } });
            }}
          >
            <DeleteIcon />
          </Button>
        )}
      </Mutation>
    </CardContent>
  </Card>
);

export default withStyles(styles)(BookCard);
