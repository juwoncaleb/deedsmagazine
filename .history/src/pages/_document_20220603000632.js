import Document, { Html, Head, Main, NextScript } from "next/document";
import Loader from "../components/Loader";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,300;0,500;0,600;1,200;1,300;1,600&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
        <Loader/>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
