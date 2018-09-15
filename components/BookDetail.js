import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = {
  wrapper: {
    padding: '15px',
    width: '90%'
  },
  container: {
    padding: '20px',
    height: '90%',
    display: 'flex',
    alignItems: 'center'
  },
  textContainer: {
    padding: '15px',
    display: 'flex',
    justifyContent: 'center'
  },
  cover: {
    maxWidth: '50%',
    maxHeight: '500px',
    border: '1px solid grey',
    borderRadius: '5px'
  },
  imageContainer: {
    padding: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  error: {
    height: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

function BookDetail({ classes, title, descr, isbn }) {
  if (!title) {
    return (
      <div className={classes.error}>
        <Paper>
          <Typography variant="display1">Nothing to show</Typography>
        </Paper>
      </div>
    );
  }

  return (
    <Grid container className={classes.container}>
      <Grid item md={8} xs={12} className={classes.textContainer}>
        <Paper className={classes.wrapper}>
          <Typography variant="display2">{title}</Typography>
          <Typography variant="body1" align="justify">
            {descr}
          </Typography>
        </Paper>
      </Grid>
      <Grid item md={4} xs={12} className={classes.imageContainer}>
        <img className={classes.cover} src={`/static/images/covers/${isbn}.jpg`} alt={title} />
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(BookDetail);
