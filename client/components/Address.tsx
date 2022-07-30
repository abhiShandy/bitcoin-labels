import React from "react";

export default function Address({ address }: { address: string }) {
  return (
    <div>
      <div>
        {address.substring(0, 4) +
          "..." +
          address.substring(address.length - 4)}
      </div>
    </div>
  );
}
