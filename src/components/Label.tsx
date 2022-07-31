import React from "react";

export default function Label({
  label,
  color,
}: {
  label: string;
  color: string;
}) {
  const borderColor = `border-${color}-500`;
  if (!label) return <></>;
  return (
    <div
      className={`text-xs px-1.5 py-0.5 mr-1 font-light rounded-xl inline-block text-${color}-500 border ${borderColor}`}
    >
      {label.toLowerCase()}
    </div>
  );
}
