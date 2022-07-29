import React from "react";

export default function ExternalLink({ children, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-indigo-500">
      {children}
    </a>
  );
}
