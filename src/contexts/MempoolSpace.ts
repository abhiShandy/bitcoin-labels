import React, { Dispatch, SetStateAction } from "react";

const ExplorerContext = React.createContext<{
  url: string;
  enabled: boolean;
  setUrl: Dispatch<SetStateAction<string>>;
  setEnabled: Dispatch<SetStateAction<boolean>>;
}>({
  url: "",
  enabled: false,
  setUrl: () => {
    return "";
  },
  setEnabled: () => {
    return false;
  },
});

export default ExplorerContext;
