import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html className="overflow-x-hidden">
        <Head>
          <link rel="shortcut icon" href="/PersonalSiteIcon.ico"/>

          <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap" rel="stylesheet"/>
          
          <link rel="preload" as="image" href="/Light/Musty1.webp"/>
          <link rel="preload" as="image" href="/Light/Musty2.webp"/>
          <link rel="preload" as="image" href="/Light/Musty3.webp"/>
          <link rel="preload" as="image" href="/Dark/MustyDark1.webp"/>
          <link rel="preload" as="image" href="/Dark/MustyDark2.webp"/>
          <link rel="preload" as="image" href="/Dark/MustyDark3.webp"/>

          <link rel="preload" as="image" href="/LightBulb_1.webp"/>
          <link rel="preload" as="image" href="/LightBulb_2.webp"/>
          <link rel="preload" as="image" href="/LightBulb_3.webp"/>
          <link rel="preload" as="image" href="/LightBulbDark_1.webp"/>
          <link rel="preload" as="image" href="/LightBulbDark_2.webp"/>
          <link rel="preload" as="image" href="/LightBulbDark_3.webp"/>
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