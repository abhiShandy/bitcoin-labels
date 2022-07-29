import React, { useState } from "react";

export default function MasterPubKeyForm({ onSubmit }) {
  const [xpub, setXpub] = useState("");
  return (
    <form>
      <div className="flex flex-col mt-4">
        <label className="text-lg pb-2">
          Paste a master public key (starting with zpub)
        </label>
        <textarea
          className="border-2 rounded p-2"
          value={xpub}
          onChange={(e) => setXpub(e.target.value)}
          name="xpub"
          id="xpub"
          cols={30}
          rows={2}
        ></textarea>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          onSubmit(xpub);
        }}
        className="bg-gray-500 p-2 text-white rounded mt-2"
      >
        Submit
      </button>
    </form>
  );
}
