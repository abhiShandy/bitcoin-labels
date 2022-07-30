import "../styles/global.css";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import XpubContext from "../contexts/Xpub";
import ExplorerContext from "../contexts/Explorer";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [xpub, setXpub] = useState("");
  const [explorerURL, setExplorerURL] = useState("");
  return (
    <XpubContext.Provider value={{ xpub, setXpub }}>
      <ExplorerContext.Provider value={{ explorerURL, setExplorerURL }}>
        <Component {...pageProps} />
      </ExplorerContext.Provider>
    </XpubContext.Provider>
  );
}

export default MyApp;
