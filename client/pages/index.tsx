import Head from "next/head";
import React, { MouseEventHandler, useContext, useState } from "react";
import MasterPubKeyForm from "../components/MasterPubKeyForm";
import SidebarLayout from "../components/SidebarLayout";
import XpubContext from "../contexts/Xpub";
import ExplorerContext from "../contexts/Explorer";
import { useRouter } from "next/router";
import MempoolSpaceURLForm from "../components/MempoolSpaceURLForm";

export default function HomePage() {
  const { xpub, setXpub } = useContext(XpubContext);
  const { explorerURL, setExplorerURL } = useContext(ExplorerContext);

  const [error, setError] = useState(true);

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
        <MasterPubKeyForm
          value={xpub}
          onError={() => setError(true)}
          onSuccess={(xpub) => {
            setXpub(xpub);
            setError(false);
          }}
        />
        <MempoolSpaceURLForm
          value={explorerURL}
          onError={() => setError(true)}
          onSuccess={(url) => {
            setExplorerURL(url);
            setError(false);
          }}
        />
        {error && (
          <button
            className="mt-6 bg-red-200 text-white p-2 rounded"
            disabled={true}
          >
            Invalid inputs!
          </button>
        )}
        {!error && (
          <button
            className="mt-6 bg-indigo-500 text-white p-2 rounded"
            onClick={handleSubmit}
          >
            Submit!
          </button>
        )}
      </SidebarLayout>
    </>
  );
}
