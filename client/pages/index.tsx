import Head from "next/head";
import React, { useContext } from "react";
import MasterPubKeyForm from "../components/MasterPubKeyForm";
import SidebarLayout from "../components/SidebarLayout";
import XpubContext from "../contexts/Xpub";
import { useRouter } from "next/router";

export default function HomePage() {
  const { xpub, setXpub } = useContext(XpubContext);

  const router = useRouter();

  const handleSubmit = (xpub: string) => {
    // TODO: validate XPUB
    setXpub(xpub);
    router.push("/address");
  };

  return (
    <>
      <Head>
        <title>Bit Table</title>
      </Head>
      <SidebarLayout title="Home">
        {!xpub && <MasterPubKeyForm onSubmit={handleSubmit} />}
        {xpub && (
          <div>
            Current XPUB:<p>{xpub}</p>
          </div>
        )}
      </SidebarLayout>
    </>
  );
}
