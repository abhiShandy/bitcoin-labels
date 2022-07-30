import { Switch } from "@headlessui/react";
import React, { useState } from "react";

/**
 * React component to enable using mempool.space
 */
export default function MempoolSpaceToggle({
  value,
  onChange,
}: {
  value: boolean;
  onChange: (value: boolean) => void;
}) {
  const [enabled, setEnabled] = useState(value);

  return (
    <div className="mt-2 flex place-content-between">
      <p>Use mempool.space instance</p>
      <Switch
        checked={enabled}
        onChange={(e) => {
          setEnabled(e);
          onChange(e);
        }}
        className={`${enabled ? "bg-indigo-500" : "bg-gray-500"}
          relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-6" : "translate-x-0"}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
