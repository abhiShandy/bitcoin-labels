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
      (url.substring(0, 7) === "http://" ||
        url.substring(0, 8) === "https://") &&
      url[url.length - 1] === "/"
    ) {
      onSuccess(url);
      setError(false);
    } else {
      onError();
      setError(true);
    }
  };

  return (
    <div className="mt-2 flex place-content-between">
      <label className="my-auto">URL</label>
      <input
        type="url"
        className={`border-2 rounded p-2 mt-2 w-64 min-w-lg ${
          error ? "outline-red-500" : ""
        }`}
        required
        value={explorerURL}
        onChange={handleChange}
      />
    </div>
  );
}
