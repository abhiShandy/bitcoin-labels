import React, { useContext } from "react";
import MempoolSpaceContext from "../contexts/MempoolSpace";
import MempoolSpaceAddressLink from "./mempoolSpace/MempoolSpaceAddressLink";

export default function Address({ address }: { address: string }) {
  const { enabled } = useContext(MempoolSpaceContext);
  return (
    <div>
      <div>
        {address.substring(0, 4) +
          "..." +
          address.substring(address.length - 4)}
      </div>
      {enabled && <MempoolSpaceAddressLink address={address} />}
    </div>
  );
}
