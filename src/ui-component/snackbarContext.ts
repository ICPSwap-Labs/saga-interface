import { createContext } from "react";

export type Alert = "error" | "success";

export default createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
  message: string;
  setMessage: (message: string) => void;
  alert: Alert;
  setAlert: (alert: Alert) => void;
}>({
  open: false,
  setOpen: (open: boolean) => {},
  message: "",
  setMessage: (message: string) => {},
  alert: "success",
  setAlert: (alert: Alert) => {},
});
