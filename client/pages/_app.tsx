import "../styles/global.css";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import XPubContext from "../contexts/XPub";
import MempoolSpaceContext from "../contexts/MempoolSpace";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [xPub, setXPub] = useState("");
  const [nAddress, setNAddress] = useState(10);
  const [mempoolSpaceEnabled, setMempoolSpaceEnabled] = useState(false);
  const [mempoolSpaceUrl, setMempoolSpaceUrl] = useState(
    "http://umbrel.local:3006/"
  );
  return (
    <XPubContext.Provider value={{ xPub, setXPub, nAddress, setNAddress }}>
      <MempoolSpaceContext.Provider
        value={{
          enabled: mempoolSpaceEnabled,
          setEnabled: setMempoolSpaceEnabled,
          url: mempoolSpaceUrl,
          setUrl: setMempoolSpaceUrl,
        }}
      >
        <Component {...pageProps} />
      </MempoolSpaceContext.Provider>
    </XPubContext.Provider>
  );
}

export default MyApp;
