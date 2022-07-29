import React from "react";

export default function MasterPubKeyForm({ xpub, setXpub, generateAddress }) {
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
        onClick={generateAddress}
        className="bg-gray-500 p-2 text-white rounded mt-2"
      >
        Generate Address
      </button>
    </form>
  );
}
