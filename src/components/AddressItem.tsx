import React, { useState } from "react";
import Address from "./Address";
import Label from "./Label";
import LabelFormModal from "./LabelFormModal";

export default function AddressItem({ address }: { address: string }) {
  const [label, setLabel] = useState("");

  return (
    <>
      <Address address={address} className="" />
      <div className="flex justify-end">
        <Label label={label} color="indigo" />
        <LabelFormModal
          label={label}
          onSubmit={(label) => {
            setLabel(label);
          }}
        />
      </div>
    </>
  );
}
