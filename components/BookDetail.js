import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = {
  wrapper: {
    padding: '15px'
  },
  container: {
    display: 'flex'
  },
  item: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  cover: {
    maxWidth: '50%',
    maxHeight: '500px',
    border: '1px solid grey',
    borderRadius: '5px'
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px'
  }
};

function BookDetail({ classes, title, descr, isbn }) {
  if (!title) {
    return (
      <div className={classes.center}>
        <Paper className={classes.center}>
          <Typography variant="display1">Nothing to show</Typography>
        </Paper>
      </div>
    );
  }

  return (
    <main>
      <div className={classes.center}>
        <Grid container className={classes.container}>
          <Grid item md={8} xs={12} className={classes.item}>
            <Paper className={classes.wrapper}>
              <Typography variant="display2">{title}</Typography>
              <Typography variant="body1" align="justify">
                {descr}
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={4} xs={12} className={classes.center}>
            <img className={classes.cover} src={`/static/images/covers/${isbn}.jpg`} alt={title} />
          </Grid>
        </Grid>
      </div>
    </main>
  );
}

export default withStyles(styles)(BookDetail);
