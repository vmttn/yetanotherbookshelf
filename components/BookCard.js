import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    height: '300px'
  },
  image: {
    height: 'auto',
    width: 'auto',
    maxHeight: '100%',
    minWidth: '30%'
  },
  title: {
    marginBottom: 16
  },
  author: {
    marginBottom: 12
  }
};

function BookCard(props) {
  const { classes, book } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.image}
        component="img"
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
        <Typography>{book.description}</Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(BookCard);
