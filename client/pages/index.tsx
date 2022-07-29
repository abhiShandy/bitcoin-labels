import Head from "next/head";
import React, { MouseEventHandler, useState } from "react";
import publicKeyToAddressList from "../utils/publicKeyToAddressList";
import MasterPubKeyForm from "../components/MasterPubKeyForm";
import AddressTable from "../components/AddressTable";
import SidebarLayout from "../components/SidebarLayout";

export default function HomePage() {
  const [xpub, setXpub] = useState("");
  const [addressList, setAddressList] = useState<string[]>([]);
  const generateAddress: MouseEventHandler = (e) => {
    e.preventDefault();
    let response: string[];
    try {
      response = publicKeyToAddressList(xpub);
      setAddressList(response);
    } catch (error) {
      alert("Error calculating addresses");
    }
  };
  return (
    <>
      <Head>
        <title>Bit Table</title>
      </Head>
      <SidebarLayout title="Address">
        {addressList.length === 0 && (
          <MasterPubKeyForm
            xpub={xpub}
            setXpub={setXpub}
            generateAddress={generateAddress}
          />
        )}
        <AddressTable addressList={addressList} />
      </SidebarLayout>
    </>
  );
}
