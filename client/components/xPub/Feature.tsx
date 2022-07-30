import React, { useState } from "react";
import NAddressForm from "./NAddressForm";
import XPubForm from "./XPubForm";

export default function XPubFeature({
  xPub,
  nAddress,
  onError,
  onSuccess,
}: {
  xPub: string;
  nAddress: number;
  onError: () => void;
  onSuccess: (xPub: string, nAddress: number) => void;
}) {
  const [xPubValue, setXPubValue] = useState(xPub);
  const [nAddressValue, setNAddressValue] = useState(nAddress);

  return (
    <>
      <XPubForm
        value={xPubValue}
        onError={onError}
        onSuccess={(xPub) => {
          setXPubValue(xPub);
          onSuccess(xPub, nAddressValue);
        }}
      />
      <NAddressForm
        value={nAddressValue}
        onChange={(nAddress) => {
          setNAddressValue(nAddress);
          onSuccess(xPubValue, nAddress);
        }}
      />
    </>
  );
}
