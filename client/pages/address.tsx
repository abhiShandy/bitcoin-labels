import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import SidebarLayout from "../components/SidebarLayout";
import AddressList from "../components/AddressList";
import publicKeyToAddressList from "../utils/publicKeyToAddressList";
import { useRouter } from "next/router";
import XPubContext from "../contexts/XPub";

export default function AddressPage() {
  const { xPub, nAddress } = useContext(XPubContext);
  const [addressList, setAddressList] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const generateAddressList = async () => {
      console.log(xPub, nAddress);

      if (!xPub) router.push("/");
      try {
        const response = publicKeyToAddressList(xPub, nAddress);
        if (response.length === 0) console.log("No address found");
        setAddressList(response);
      } catch (error) {
        console.log("Error getting addresses. Check XPUB!");
        router.push("/");
      }
    };
    generateAddressList();
  }, [xPub, nAddress, router]);

  return (
    <>
      <Head>
        <title>Address | Bit Table</title>
      </Head>
      <SidebarLayout title="Address">
        <AddressList addressList={addressList} />
      </SidebarLayout>
    </>
  );
}
