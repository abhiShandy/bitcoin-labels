import Head from "next/head";
import React, { MouseEventHandler, useState } from "react";
import publicKeyToAddressList from "../utils/publicKeyToAddressList";

export default function HomePage() {
  const [xpub, setXpub] = useState("");
  const [addressList, setAddressList] = useState<string[]>([""]);
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
      <main className="w-8/12 mx-auto">
        <form>
          <div className="flex flex-col mt-4">
            <label className="text-lg pb-2">Enter master public key</label>
            <textarea
              className="border-2 rounded p-2"
              value={xpub}
              onChange={(e) => setXpub(e.target.value)}
              name="xpub"
              id="xpub"
              cols={30}
              rows={2}
            ></textarea>
          </div>
          <button
            onClick={generateAddress}
            className="bg-gray-500 p-2 text-white rounded mt-2"
          >
            Generate Address
          </button>
        </form>
        <div className="mt-4">
          <ol>
            {addressList.map((address) => (
              <li key={address}>{address}</li>
            ))}
          </ol>
        </div>
      </main>
    </>
  );
}
