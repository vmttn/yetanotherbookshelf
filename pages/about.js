import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';

import AppBar from '../components/AppBar';

const styles = {
  wrapper: {
    height: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: '67%',
    display: 'flex',
    justifyContent: 'center'
  },
  item: {
    height: '150px'
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'contain'
  }
};

const logos = ['babel', 'heroku', 'material-ui', 'mongo', 'node', 'redux', 'react', 'webpack'];

const About = ({ classes }) => (
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

export default withStyles(styles)(About);
