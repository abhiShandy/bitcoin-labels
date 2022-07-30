import React, { useState } from "react";

export default function NAddressForm({
  value,
  onChange,
}: {
  value: number;
  onChange: (nAddress: number) => void;
}) {
  const [nAddress, setNAddress] = useState(value);
  return (
    <div className="flex place-content-between mt-4">
      <label className="my-auto">Address Depth</label>
      <input
        className="border-2 rounded p-1"
        type="number"
        min={1}
        step={1}
        max={50}
        value={nAddress}
        onChange={(e) => {
          const parsedValue = parseFloat(e.target.value);
          setNAddress(parsedValue);
          onChange(parsedValue);
        }}
      />
    </div>
  );
}
