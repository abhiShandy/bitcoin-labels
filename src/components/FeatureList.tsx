import React from "react";

export default function FeatureList({
  version,
  children,
}: {
  version: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <p className="text-sm">{version}</p>
      <ol className="pl-3 ml-1 border-l-2 border-secondary-400 text-sm">
        {children}
      </ol>
    </>
  );
}
