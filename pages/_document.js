import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    let pageContext;
    const page = renderPage(Component => {
      const WrappedComponent = props => {
        // eslint-disable-next-line prefer-destructuring, react/destructuring-assignment
        pageContext = props.pageContext;
        return <Component {...props} />;
      };

      return WrappedComponent;
    });

    return {
      ...page,
      pageContext,
      styles: (
        <>
          <style
            id="jss-server-side"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
          />
          {flush() || null}
        </>
      )
    };
  }

  render() {
    const { pageContext } = this.props;

    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <title>Yet Another Bookshelf</title>
          <meta name="theme-color" content={pageContext.theme.palette.primary.main} />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

          <style>
            {`
            html, body, #__next {
              height: 100%
            }
            a {
              outline: 0;
              color: inherited;
            }
            a:hover, a:active, a:link {
              text-decoration: none;
            }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
