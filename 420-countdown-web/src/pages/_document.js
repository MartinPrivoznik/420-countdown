import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="title" content="420 Countdown - BETA" />
          <meta
            name="description"
            content="Countdown clock displaying the remaining time until upcoming 4:20. The goal is to make this a perfect place for waiting until next 420."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://420-countdown.com/" />
          <meta property="og:title" content="420 Countdown - BETA" />
          <meta
            property="og:description"
            content="Countdown clock displaying the remaining time until upcoming 4:20. The goal is to make this a perfect place for waiting until next 420."
          />
          <meta property="og:image" content="" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://420-countdown.com/" />
          <meta property="twitter:title" content="420 Countdown - BETA" />
          <meta
            property="twitter:description"
            content="Countdown clock displaying the remaining time until upcoming 4:20. The goal is to make this a perfect place for waiting until next 420."
          />
          <meta property="twitter:image" content="" />
          <meta name="google" content="notranslate" />
          <meta name="google-site-verification" content="Wo-hAYg20yw3v_YVaHuG-Ywq9UHnzePgeHjQyormbSU" />
          <link rel="canonical" href="https://420-countdown.com/" />

          <link rel="icon" href="/favicon.ico"></link>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo192.png"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
