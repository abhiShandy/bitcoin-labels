import React, { ChangeEventHandler, useState } from "react";
import xpubConverter from "../../utils/xpubConverter";

export default function XPubForm({
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
      <label className="text-lg pb-2">Paste a zpub</label>
      <textarea
        className={`border-2 rounded p-2 h-32 lg:h-auto ${
          error ? "border-red-500 outline-red-500" : ""
        }`}
        value={xpub}
        onChange={checkXpub}
      ></textarea>
    </div>
  );
}
