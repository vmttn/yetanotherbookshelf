import React from 'react';

import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';

import BookGrid from './BookGrid';

class BookGridContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    fetch('/api/v1/public/book')
      .then(res => res.json())
      .then(data => this.setState({ books: data }));
  }

  render() {
    const { books } = this.state;
    const { searchTerm } = this.props;
    return <BookGrid searchTerm={searchTerm} books={books} />;
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

export default connect(mapStateToProps)(BookGridContainer);
