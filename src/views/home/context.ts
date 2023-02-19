import { createContext } from "react";

export default createContext<{
  reload: boolean;
  setReload: () => void;
}>({
  reload: false,
  setReload: () => {},
});
