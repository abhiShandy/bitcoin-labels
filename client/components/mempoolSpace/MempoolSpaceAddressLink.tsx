import React, { useContext } from "react";
import MempoolSpaceContext from "../../contexts/MempoolSpace";

export default function MempoolSpaceAddressLink({
  address,
}: {
  address: string;
}) {
  const { url } = useContext(MempoolSpaceContext);
  return (
    <div>
      <a
        className="text-sm text-indigo-500 font-light"
        href={`${url}address/${address}`}
        target="_blank"
        rel="noreferrer"
      >
        view on mempool.space
      </a>
    </div>
  );
}
