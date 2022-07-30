import React, { ChangeEventHandler, useState } from "react";
import xpubConverter from "../utils/xpubConverter";

export default function MasterPubKeyForm({ onSubmit }) {
  const [xpub, setXpub] = useState("");
  const [error, setError] = useState(false);

  const checkXpub: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setXpub(e.target.value);
    try {
      xpubConverter(e.target.value);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <form>
      <div className="flex flex-col mt-4">
        <label className="text-lg pb-2">
          Paste a master public key (starting with zpub)
        </label>
        <textarea
          className={`border-2 rounded p-2 ${
            error ? "border-red-500 outline-red-500" : ""
          }`}
          value={xpub}
          onChange={checkXpub}
          name="xpub"
          id="xpub"
          cols={30}
          rows={2}
        ></textarea>
      </div>
      {xpub.length > 0 && (
        <button
          onClick={(e) => {
            e.preventDefault();
            onSubmit(xpub);
          }}
          className="bg-gray-500 p-2 text-white rounded mt-2 disabled:bg-gray-300"
          disabled={error}
        >
          {error && "Invalid key"}
          {!error && "Submit"}
        </button>
      )}
    </form>
  );
}
