import { updateKey } from "./actions";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { keys } from "constants/key";
import { useCallback } from "react";
import store from "store/index";

export function getKey() {
  return store.getState().global.key;
}

export function useKey() {
  return useAppSelector((state) => state.global.key);
}

export function useToggleKey() {
  const dispatch = useAppDispatch();
  const key = useKey();

  return useCallback(() => {
    let _key = 0;

    if (key === keys.length - 1) {
      _key = 0;
    } else {
      _key++;
    }

    dispatch(updateKey(_key));
  }, [key, dispatch]);
}
