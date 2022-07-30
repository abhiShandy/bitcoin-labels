import React, { useContext } from "react";
import ExplorerContext from "../contexts/Explorer";
import MempoolSpaceAddressLink from "./MempoolSpaceAddressLink";

export default function Address({ address }: { address: string }) {
  const { explorerURL } = useContext(ExplorerContext);

  return (
    <div>
      <div>
        {address.substring(0, 4) +
          "..." +
          address.substring(address.length - 4)}
      </div>
      <MempoolSpaceAddressLink url={explorerURL} address={address} />
    </div>
  );
}
