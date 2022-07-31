import { PencilIcon } from "@heroicons/react/outline";
import React from "react";
import Address from "./Address";
import Label from "./Label";

export default function AddressItem({ address }: { address: string }) {
  return (
    <>
      <Address address={address} className="" />
      <div className="flex justify-end">
        <Label label="Sample" color="indigo" />
        <PencilIcon className="h-4 my-auto" />
      </div>
    </>
  );
}
