import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

function create(initialState, uri) {
  return new ApolloClient({
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({ uri }),
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export default function initApolloClient(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    // apollo-boost require absolute URL on the server side
    const dev = process.env.NODE_ENV !== 'production';
    const serverPort = process.env.PORT || 8000;
    const baseUrl = dev ? `http://localhost:${serverPort}` : 'https://yetanotherbookshelf.herokuapp.com';
    return create(initialState, `${baseUrl}/graphql`);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, '/graphql');
  }

  return apolloClient;
}
