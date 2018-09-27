// @flow

import React from 'react';

import Router from 'next/router';

import Typography from '@material-ui/core/Typography';

import Autosuggest from 'react-autosuggest';

type searchInputProps = {
  searchTerm: string,
  options: Array<bookType>,
  handleInputChange: (e: SyntheticInputEvent<HTMLInputElement>) => void
};

//
const styles = {
  container: {
    position: 'relative'
  },
  input: {
    width: '200px',
    height: '2em',
    padding: '10px 20px',
    opacity: '0.5',
    border: '1px solid grey',
    borderRadius: '5px'
  },
  inputOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  inputFocused: {
    outline: 'none'
  },
  suggestionsContainer: {
    display: 'none'
  },
  suggestionsContainerOpen: {
    display: 'block',
    width: '100%',
    position: 'absolute',
    backgroundColor: '#fff',
    zIndex: '2'
  },
  suggestionsList: {
    width: '100%',
    margin: 0,
    padding: 0,
    border: '1px solid grey',
    listStyleType: 'none'
  },
  suggestion: {
    cursor: 'pointer',
    padding: '10px 20px'
  },
  suggestionHighlighted: {
    backgroundColor: '#ddd'
  }
};

const getSuggestions = (options = [], value) => {
  const escapedValue = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  if (escapedValue === '') return [];

  const regex = new RegExp(escapedValue, 'i');
  return options.filter(suggestion => regex.test(suggestion.title));
};

class SearchInput extends React.Component<searchInputProps, { suggestions: [] }> {
  constructor(props: searchInputProps) {
    super(props);
    this.state = { suggestions: [] };
  }

  onSuggestionsFetchRequested(value) {
    const { options } = this.props;
    this.setState({ suggestions: getSuggestions(options, value) });
  }

  onSuggestionsClearRequested() {
    this.setState({ suggestions: [] });
  }

  renderSuggestion(suggestion: bookType) {
    return <Typography>{suggestion.title}</Typography>;
  }

  render() {
    const { handleInputChange, searchTerm } = this.props;
    const { suggestions } = this.state;
    return (
      <Autosuggest
        theme={styles}
        suggestions={suggestions}
        renderSuggestion={this.renderSuggestion}
        getSuggestionValue={suggestion => suggestion.title}
        onSuggestionsFetchRequested={({ value }) => this.onSuggestionsFetchRequested(value)}
        onSuggestionsClearRequested={() => this.onSuggestionsClearRequested}
        onSuggestionSelected={(e, { suggestion }) => {
          Router.push(`/book?title=${suggestion.title}&isbn=${suggestion.isbn}`, '/book');
        }}
        inputProps={{
          value: searchTerm,
          onChange: (e, { newValue }) => handleInputChange(newValue),
          placeholder: 'Search...'
        }}
      />
    );
  }
}

export default SearchInput;
