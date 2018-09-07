import {Provider} from 'react-redux';
import store from '../lib/store';

import AppBar from '../components/AppBar';
import BookCard from '../components/BookCard';
import SearchInput from '../components/SearchInput';

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
      <Provider store={store}>
        <React.Fragment>
          <AppBar>
            <SearchInput/>
          </AppBar>

          <Grid className={classes.grid} container justify="space-around" alignContent="space-between">
            {
              [1, 2, 3, 4, 5, 6, 7, 9, 10, 11].map(
                value =>
                  <Grid className={classes.item} item key={value} xs={12} md={6} xl={4}>
                    <BookCard/>
                  </Grid>
              )
            }
          </Grid>
        </React.Fragment>
      </Provider>
    </React.Fragment>
  );
}


export default withStyles(styles)(Index);