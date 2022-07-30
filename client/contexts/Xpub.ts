import React, { Dispatch, SetStateAction } from "react";

const XPubContext = React.createContext<{
  xPub: string;
  nAddress: number;
  setXPub: Dispatch<SetStateAction<string>>;
  setNAddress: Dispatch<SetStateAction<number>>;
}>({
  xPub: "",
  nAddress: 0,
  setXPub: () => {
    return "";
  },
  setNAddress: () => {
    return 0;
  },
});

export default XPubContext;
