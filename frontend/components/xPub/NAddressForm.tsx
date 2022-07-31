import React, { useContext, useState } from "react";
import XPubContext from "../../contexts/XPub";

export default function NAddressForm() {
  const { nAddress, setNAddress } = useContext(XPubContext);
  return (
    <div className="flex place-content-between mt-4">
      <label className="my-auto">Address Depth</label>
      <input
        className="border-2 rounded p-1 w-16"
        type="number"
        min={1}
        step={1}
        max={50}
        value={nAddress}
        onChange={(e) => {
          const parsedValue = parseFloat(e.target.value);
          setNAddress(parsedValue);
        }}
      />
    </div>
  );
}
