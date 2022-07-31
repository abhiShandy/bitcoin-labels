import React, { useContext, useState } from "react";
import MempoolSpaceToggle from "./MempoolSpaceToggle";
import MempoolSpaceURLForm from "./MempoolSpaceURLForm";
import MempoolSpaceContext from "../../contexts/MempoolSpace";

export default function MempoolSpaceFeature({
  onError,
}: {
  onError: () => void;
}) {
  const { enabled } = useContext(MempoolSpaceContext);
  return (
    <>
      <MempoolSpaceToggle />
      {enabled && <MempoolSpaceURLForm onError={onError} />}
    </>
  );
}
