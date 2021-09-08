import Document, { Html, Head, Main, NextScript } from 'next/document'

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
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: customScript,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

const customScript = `
  console.log("YES CUSTOM SCRIPT");
`

export default MyDocument