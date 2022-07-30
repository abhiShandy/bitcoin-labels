import React from "react";

export default function MempoolSpaceFeature({
  enabled = false,
  url = "https://mempool.space/",
  onError,
  onSuccess,
}: {
  enabled: boolean;
  url: string;
  onError: () => void;
  onSuccess: (url: string) => void;
}) {
  return <></>;
}
