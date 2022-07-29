import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import SidebarLayout from "../components/SidebarLayout";
import AddressTable from "../components/AddressTable";
import publicKeyToAddressList from "../utils/publicKeyToAddressList";
import XpubContext from "../contexts/Xpub";
import { useRouter } from "next/router";

export default function AddressPage() {
  const { xpub } = useContext(XpubContext);
  const [addressList, setAddressList] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const generateAddressList = async () => {
      if (!xpub) router.push("/");
      try {
        const response = publicKeyToAddressList(xpub);
        if (response.length === 0) console.log("No address found");
        setAddressList(response);
      } catch (error) {
        console.log("Error getting addresses. Check XPUB!");
        router.push("/");
      }
    };
    generateAddressList();
  }, [xpub, router]);

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
