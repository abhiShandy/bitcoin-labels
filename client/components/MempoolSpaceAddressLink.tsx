import React from "react";

export default function MempoolSpaceAddressLink({
  url,
  address,
}: {
  url: string;
  address: string;
}) {
  return (
    <div>
      <a
        className="text-sm text-indigo-500 font-light"
        href={`${url}address/${address}`}
        target="_blank"
        rel="noreferrer"
      >
        view on explorer
      </a>
    </div>
  );
}
