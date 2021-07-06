import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head />
        <body className="h-screen w-screen bg-white dark:bg-main-dark-gray overflow-auto">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument