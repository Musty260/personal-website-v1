import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html className="overflow-x-hidden">
        <Head>
            <link rel="shortcut icon" href="/PersonalSiteIcon.ico"/>

            <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap" rel="stylesheet"/>
        </Head>
        <body className="h-screen w-screen bg-white dark:bg-main-dark-gray overflow-x-hidden relative">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument