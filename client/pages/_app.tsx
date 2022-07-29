import "../styles/global.css";
import type { AppProps } from "next/app";
import React from "react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
