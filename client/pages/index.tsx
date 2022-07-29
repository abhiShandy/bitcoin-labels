import Head from "next/head";
import React, { useContext } from "react";
import MasterPubKeyForm from "../components/MasterPubKeyForm";
import SidebarLayout from "../components/SidebarLayout";
import XpubContext from "../contexts/Xpub";

export default function HomePage() {
  const { xpub, setXpub } = useContext(XpubContext);
  return (
    <>
      <Head>
        <title>Bit Table</title>
      </Head>
      <SidebarLayout title="Home">
        <MasterPubKeyForm xpub={xpub} setXpub={setXpub} />
      </SidebarLayout>
    </>
  );
}
