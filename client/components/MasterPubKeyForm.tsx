import React, { ChangeEventHandler, useState } from "react";
import xpubConverter from "../utils/xpubConverter";

export default function MasterPubKeyForm({
  value,
  onError,
  onSuccess,
}: {
  value: string;
  onError: () => void;
  onSuccess: (xpub: string) => void;
}) {
  const [xpub, setXpub] = useState(value);
  const [error, setError] = useState(false);

  const checkXpub: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setXpub(e.target.value);
    try {
      xpubConverter(e.target.value);
      setError(false);
      onSuccess(e.target.value);
    } catch (error) {
      setError(true);
      onError();
    }
  };

  return (
    <div className="flex flex-col mt-4">
      <label className="pb-2">
        <span className="text-lg">Paste a ZPUB</span>
        <span
          className={`text-sm pb-2 float-right ${
            error ? "text-red-500" : "text-green-500"
          }`}
        >
          {error && "Invalid!"}
          {xpub && !error && "Valid!"}
        </span>
      </label>
      <textarea
        className={`border-2 rounded p-2 h-32 ${
          error ? "border-red-500 outline-red-500" : ""
        }`}
        value={xpub}
        onChange={checkXpub}
      ></textarea>
    </div>
  );
}
