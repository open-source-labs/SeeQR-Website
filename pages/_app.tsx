import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import FavIcon from "../public/favicon.ico";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SeeQR</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
