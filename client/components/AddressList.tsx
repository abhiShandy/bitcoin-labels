import React, { useContext } from "react";
import AddressItem from "./AddressItem";
import MempoolSpaceContext from "../contexts/MempoolSpace";

export default function AddressList({
  addressList,
}: {
  addressList: string[];
}) {
  const { enabled } = useContext(MempoolSpaceContext);

  if (addressList.length === 0) return <></>;

  return (
    <ol role="list" className="divide-y divide-gray-200 list-decimal ml-4">
      {addressList.map((address) => (
        <li key={address} className="py-4">
          <AddressItem address={address} />
          {/* {enabled && <MempoolSpaceAddressItem address={address} />} */}
        </li>
      ))}
    </ol>
  );
}
