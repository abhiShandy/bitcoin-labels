import React, { ChangeEventHandler, useContext, useState } from "react";
import XPubContext from "../../contexts/XPub";
import xpubConverter from "../../utils/xpubConverter";

export default function XPubForm({ onError }: { onError: () => void }) {
  const { xPub, setXPub } = useContext(XPubContext);
  const [error, setError] = useState(false);

  const checkXpub: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setXPub(e.target.value);
    try {
      xpubConverter(e.target.value);
      setError(false);
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
        value={xPub}
        onChange={checkXpub}
      ></textarea>
    </div>
  );
}
