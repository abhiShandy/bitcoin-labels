import React, { Dispatch, SetStateAction } from "react";

const ExplorerContext = React.createContext<{
  explorerURL: string;
  setExplorerURL: Dispatch<SetStateAction<string>>;
}>({
  explorerURL: "",
  setExplorerURL: () => {
    return "";
  },
});

export default ExplorerContext;
