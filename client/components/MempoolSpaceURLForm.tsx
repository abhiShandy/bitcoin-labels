import React, { ChangeEventHandler, useState } from "react";
export default function MempoolSpaceURLForm({
  value,
  onError,
  onSuccess,
}: {
  value: string;
  onError: () => void;
  onSuccess: (url: string) => void;
}) {
  const [explorerURL, setExplorerURL] = useState(value);
  const [error, setError] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const url = e.target.value;
    setExplorerURL(url);
    if (
      url.substring(0, 7) === "http://" ||
      url.substring(0, 8) === "https://"
    ) {
      onSuccess(url);
      setError(false);
    } else {
      onError();
      setError(true);
    }
  };

  return (
    <div className="mt-6">
      <label className="text-lg">URL of trusted mempool.space instance</label>
      <input
        type="url"
        className={`border-2 rounded p-2 mt-2 w-full max-w-sm ${
          error ? "outline-red-500" : ""
        }`}
        required
        value={explorerURL}
        onChange={handleChange}
      />
    </div>
  );
}
