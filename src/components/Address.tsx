import React from "react";

export default function Address({
  address,
  className,
}: {
  address: string;
  className: string;
}) {
  return (
    <div className={className}>
      {address.substring(0, 10) + "..." + address.substring(address.length - 4)}
    </div>
  );
}
