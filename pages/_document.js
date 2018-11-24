import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags } // return styles collected
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />          
          <meta name="viewport" content="width=device-width; initial-scale=1; maximum-scale=2;" />                
          <meta name="referrer" content="unsafe-url" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
          <link rel="manifest preconnect" href="/static/manifest.json" />
          <meta name="theme-color" content="#1DA57A" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}