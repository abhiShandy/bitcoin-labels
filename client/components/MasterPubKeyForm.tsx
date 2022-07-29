import React from "react";
import { useRouter } from "next/router";

export default function MasterPubKeyForm({ xpub, setXpub }) {
  const router = useRouter();
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
          router.push("/address");
        }}
        className="bg-gray-500 p-2 text-white rounded mt-2"
      >
        Submit
      </button>
    </form>
  );
}
