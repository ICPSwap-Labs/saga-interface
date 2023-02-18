import { useCallback, useMemo } from "react";
import { openLoading, closeLoading } from "store/loadingReducer";
import { useAppDispatch, useAppSelector } from "store/hooks";
import store from "store";
import { openSnackbar } from "store/snackbar/actions";

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

export function useFullscreenLoading(): [() => void, () => void, boolean] {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.loading.open);

  const open = useCallback(() => {
    dispatch(openLoading());
  }, [dispatch]);

  const close = useCallback(() => {
    dispatch(closeLoading());
  }, [dispatch]);

  return useMemo(() => [open, close, isOpen], [open, close, isOpen]);
}

export function openTip(message: string, type: MessageTypes) {
  if (type === TIP_ERROR) {
    store.dispatch(
      openSnackbar({
        message,
        variant: "alert",
        alertSeverity: "error",
      })
    );
  } else {
    store.dispatch(
      openSnackbar({
        message,
        variant: "alert",
        alertSeverity: "success",
      })
    );
  }
}

export function openErrorTip(message: string) {
  openTip(message, TIP_ERROR);
}
