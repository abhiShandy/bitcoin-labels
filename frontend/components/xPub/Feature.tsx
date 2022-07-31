import React from "react";
import NAddressForm from "./NAddressForm";
import XPubForm from "./XPubForm";

export default function XPubFeature({ onError }: { onError: () => void }) {
  return (
    <>
      <XPubForm onError={onError} />
      <NAddressForm />
    </>
  );
}
