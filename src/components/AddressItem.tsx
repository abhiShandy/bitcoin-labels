import React from "react";
import Address from "./Address";
import Label from "./Label";

export default function AddressItem({ address }: { address: string }) {
  return (
    <>
      <Address address={address} className="" />
      <Label label="Sample" color="indigo" />
    </>
  );
}
