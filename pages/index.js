import {Provider} from 'react-redux';
import store from '../lib/store';

import AppBar from '../components/AppBar';
import BookGrid from '../components/BookGrid';
import SearchInput from '../components/SearchInput';

function Index({classes}) {
  return (
    <React.Fragment>
      <Provider store={store}>
        <React.Fragment>
          <AppBar>
            <SearchInput/>
          </AppBar>

          <BookGrid/>
        </React.Fragment>
      </Provider>
    </React.Fragment>
  );
}


export default Index;