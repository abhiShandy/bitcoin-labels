import "../styles/global.css";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import XPubContext from "../contexts/XPub";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [xPub, setXPub] = useState("");
  const [nAddress, setNAddress] = useState(10);
  return (
    <XPubContext.Provider value={{ xPub, setXPub, nAddress, setNAddress }}>
      <Component {...pageProps} />
    </XPubContext.Provider>
  );
}

export default MyApp;
