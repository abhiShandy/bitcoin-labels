import "../styles/global.css";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import XpubContext from "../contexts/Xpub";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [xpub, setXpub] = useState("");
  return (
    <XpubContext.Provider value={{ xpub, setXpub }}>
      <Component {...pageProps} />
    </XpubContext.Provider>
  );
}

export default MyApp;
