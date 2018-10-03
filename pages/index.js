// @flow

import React from 'react';

import AppBar from '../components/AppBar';
import BookGrid from '../components/BookGrid';

<<<<<<< 11ab1602f61891313b1a77586e2ef7328a7e4da1
const Index = () => (
  <>
    <AppBar withSearch />
    <BookGrid />
  </>
);

export default Index;
=======
class Index extends React.Component<{ books: Array<bookType>, loadBooks: () => void }> {
  componentDidMount() {
    this.props.loadBooks();
  }

  render() {
    const { books } = this.props;
    return (
      <>
        <AppBar withSearch />
        <BookGrid books={books} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books
});

export default connect(
  mapStateToProps,
  { loadBooks }
)(Index);
>>>>>>> Reduce redux boilerplate
