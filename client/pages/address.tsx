import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import SidebarLayout from "../components/SidebarLayout";
import AddressTable from "../components/AddressTable";
import publicKeyToAddressList from "../utils/publicKeyToAddressList";
import XpubContext from "../contexts/Xpub";

export default function AddressPage() {
  const { xpub } = useContext(XpubContext);
  const [addressList, setAddressList] = useState<string[]>([]);

  useEffect(() => {
    const generateAddressList = async () => {
      try {
        const response = publicKeyToAddressList(xpub);
        setAddressList(response);
      } catch (error) {
        console.log("Error getting addresses");
      }
    };
    generateAddressList();
  }, [xpub]);

  return (
    <>
      <Head>
        <title>Address | Bit Table</title>
      </Head>
      <SidebarLayout title="Address">
        <AddressTable addressList={addressList} />
      </SidebarLayout>
    </>
  );
}
