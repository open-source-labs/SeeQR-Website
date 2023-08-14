import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="favicon.ico" />
        <meta name="description" content="SeeQR applicaiton landing page" />
        <meta name="author" content="the SeeQR team" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
