import React, { Dispatch, SetStateAction } from "react";

const XpubContext = React.createContext<{
  xpub: string;
  setXpub: Dispatch<SetStateAction<string>>;
}>({
  xpub: "",
  setXpub: () => {
    return "";
  },
});

export default XpubContext;
