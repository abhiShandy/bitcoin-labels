import Head from "next/head";
import React, { MouseEventHandler, useContext, useState } from "react";
import SidebarLayout from "../components/SidebarLayout";
import { useRouter } from "next/router";
import XPubContext from "../contexts/XPub";
import XPubFeature from "../components/xPub/Feature";
import MempoolSpaceContext from "../contexts/MempoolSpace";
import MempoolSpaceFeature from "../components/mempoolSpace/Feature";

export default function HomePage() {
  const { xPub, setXPub, nAddress, setNAddress } = useContext(XPubContext);
  const {
    url: mempoolSpaceUrl,
    enabled: mempoolSpaceEnabled,
    setUrl: setMempoolSpaceUrl,
    setEnabled: setMempoolSpaceEnabled,
  } = useContext(MempoolSpaceContext);

  const [error, setError] = useState(!xPub);

  const router = useRouter();

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    router.push("/address");
  };

  return (
    <>
      <Head>
        <title>Bit Table</title>
      </Head>
      <SidebarLayout title="Home">
        <XPubFeature
          xPub={xPub}
          nAddress={nAddress}
          onError={() => setError(true)}
          onSuccess={(xPub, nAddress) => {
            setXPub(xPub);
            setNAddress(nAddress);
            setError(false);
          }}
        />
        <hr className="my-4" />
        <MempoolSpaceFeature
          enabled={mempoolSpaceEnabled}
          url={mempoolSpaceUrl}
          onError={() => setError(true)}
          onSuccess={(url) => {
            setMempoolSpaceEnabled(true);
            setMempoolSpaceUrl(url);
            setError(false);
          }}
        />

        {error && (
          <button
            className="mt-6 bg-red-200 text-white p-2 rounded w-full"
            disabled={true}
          >
            Invalid inputs!
          </button>
        )}
        {!error && (
          <button
            className="mt-6 bg-indigo-500 text-white p-2 rounded w-full"
            onClick={handleSubmit}
          >
            Submit!
          </button>
        )}
      </SidebarLayout>
    </>
  );
}
