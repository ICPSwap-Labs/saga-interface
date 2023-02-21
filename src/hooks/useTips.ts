import { useCallback, useContext } from "react";
import SnackbarContext from "ui-component/snackbarContext";

export enum MessageTypes {
  success = "ok",
  error = "err",
  warning = "warning",
  loading = "loading",
}

export const TipTypes: { [key in MessageTypes]: "success" | "error" | "warning" | "loading" } = {
  [MessageTypes.success]: "success",
  [MessageTypes.error]: "error",
  [MessageTypes.warning]: "warning",
  [MessageTypes.loading]: "loading",
};

export const TIP_ERROR = MessageTypes.error;
export const TIP_SUCCESS = MessageTypes.success;
export const TIP_LOADING = MessageTypes.loading;

export type TIP_KEY = string | undefined | number;

export type TIP_OPTIONS = { [key: string]: any };

export function useTips() {
  const { setMessage, setOpen, setAlert } = useContext(SnackbarContext);

  return useCallback((message: string, type: MessageTypes) => {
    if (type === TIP_ERROR) {
      setAlert("error");
      setMessage(message);
    } else {
      setAlert("success");
      setMessage(message);
    }

    setOpen(true);
  }, []);
}
