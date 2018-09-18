import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
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

const BookCard = ({ classes, book }) => (
  <Card className={classes.card}>
    <CardMedia
      component={() => <img className={classes.image} src={`/static/images/covers/${book.isbn}.jpg`} />}
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
    </CardContent>
  </Card>
);

export default withStyles(styles)(BookCard);
