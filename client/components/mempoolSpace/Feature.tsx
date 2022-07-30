import React, { useState } from "react";
import MempoolSpaceToggle from "./MempoolSpaceToggle";
import MempoolSpaceURLForm from "./MempoolSpaceURLForm";

export default function MempoolSpaceFeature({
  enabled = false,
  url,
  onError,
  onSuccess,
}: {
  enabled: boolean;
  url: string;
  onError: () => void;
  onSuccess: (url: string, enabled: boolean) => void;
}) {
  const [enabledValue, setEnabledValue] = useState(enabled);
  const [urlValue, setUrlValue] = useState(url);

  return (
    <>
      <MempoolSpaceToggle
        value={enabledValue}
        onChange={(val) => {
          setEnabledValue(val);
          onSuccess(urlValue, val);
        }}
      />
      {enabledValue && (
        <MempoolSpaceURLForm
          value={urlValue}
          onError={onError}
          onSuccess={(url) => {
            setUrlValue(url);
            onSuccess(url, enabledValue);
          }}
        />
      )}
    </>
  );
}
