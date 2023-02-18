import axios from "axios";
import { useCallsData } from "hooks/useCallsData";
import { useCallback } from "react";

const CURRCONV_BASE = "https://free.currconv.com/api/v7/convert?q=XDR_USD&compact=ultra&apiKey=bc25fc5fc3b3d87bda59";

export function useXDR2USDCallback() {
  return useCallback(async () => {
    const data = await axios.get(CURRCONV_BASE).then((res) => res.data);
    return data;
  }, []);
}

export function useXDR2USDCall() {
  const callback = useXDR2USDCallback();

  return useCallsData(useCallback(async () => await callback(), []));
}
