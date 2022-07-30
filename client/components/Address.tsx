import React from "react";

export default function Address({ address }) {
  return (
    <div>
      <div>{address}</div>
      <div>
        <a
          className="text-sm text-indigo-500 font-light"
          href={`https://mempool.space/address/${address}`}
          target="_blank"
          rel="noreferrer"
        >
          view on mempool.space
        </a>
      </div>
    </div>
  );
}
