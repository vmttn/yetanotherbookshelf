import React from 'react';

import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '../components/AppBar';

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    padding: '15px'
  },
  container: {
    height: '150px',
    width: '67%',
    display: 'flex',
    justifyContent: 'center'
  },
  item: {
    height: '100%'
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'contain'
  }
};

function About(props) {
  const { classes } = props;
  const logos = ['babel', 'heroku', 'material-ui', 'mongo', 'node', 'redux', 'react', 'webpack'];
  return (
    <>
      <AppBar />

      <div className={classes.wrapper}>
        <Grid container className={classes.container} spacing={40}>
          {logos.map((val, index) => (
            <Grid item className={classes.item} key={val} xs={6} md={3} xl={2}>
              <Grow in timeout={750 + 250 * index}>
                <img className={classes.image} src={`/static/images/logos/${val}.svg`} alt={val} />
              </Grow>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default withStyles(styles)(About);
