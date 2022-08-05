import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/major/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Zacbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
