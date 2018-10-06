import React from 'react';
import NextApp, { Container } from 'next/app';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import { Provider as StoreProvider } from 'react-redux';
import getPageContext from '../lib/getPageContext';
import { ApolloProvider } from 'react-apollo';
import withApolloClient from '../lib/withApolloClient';
import initReduxStore from '../lib/initRedux';

class App extends NextApp {
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
    this.reduxStore = initReduxStore();
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <JssProvider registry={this.pageContext.sheetsRegistry} generateClassName={this.pageContext.generateClassName}>
          <MuiThemeProvider theme={this.pageContext.theme} sheetsManager={this.pageContext.sheetsManager}>
            <StoreProvider store={this.reduxStore}>
              <ApolloProvider client={apolloClient}>
                <>
                  <CssBaseline />
                  <Component pageContext={this.pageContext} {...pageProps} />
                </>
              </ApolloProvider>
            </StoreProvider>
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}

export default withApolloClient(App);
