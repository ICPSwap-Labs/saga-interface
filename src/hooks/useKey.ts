import { keys } from "constants/key";
import { useCallback } from "react";

const storage = window.localStorage;

export function getKey() {
  const _key = storage.getItem("key");
  return _key ? Number(JSON.parse(_key)) : 0;
}

export function useKey() {
  return getKey();
}

export function useToggleKey() {
  const key = useKey();

  return useCallback(() => {
    let _key = 0;

    if (key === keys.length - 1) {
      _key = 0;
    } else {
      _key++;
    }

    storage.setItem("key", JSON.stringify(_key));
  }, [key]);
}
