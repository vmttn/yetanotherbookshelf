import AppBar from '../components/AppBar';
import BookCard from '../components/BookCard';

import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

const styles = {
  grid: {
    padding: "15px",
  },
  item: {
    padding: "10px"
  }
};

function Index({classes}) {
  return (
    <React.Fragment>
      <AppBar/>

      <Grid className={classes.grid} container justify="space-around" alignContent="space-between">
        {
          [1, 2, 3, 4, 5, 6, 7, 9, 10, 11].map(
            ({index}) =>
              <Grid className={classes.item} item key={index} xs={12} md={6} xl={4}>
                <BookCard/>
              </Grid>
          )
        }
      </Grid>
    </React.Fragment>
  );
}


export default withStyles(styles)(Index);