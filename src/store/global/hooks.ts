import { useEffect, useMemo, useCallback } from "react";
import {
  updateICPBalance,
  updateICPBlocks,
  updateXDR2USD,
  updateICPPriceList,
  updatePoolStandardInitialed,
} from "./actions";
import { WRAPPED_ICP_TOKEN_INFO, TOKEN_STANDARD, ICP_TOKEN_INFO } from "constants/tokens";
import { useICPBlocksCall } from "hooks/useICPCalls";
import { getTokenBalance } from "hooks/token/calls";
import { parseTokenAmount, BigNumber } from "@icpswap/sdk";
import { useXDR2USDCallback } from "hooks/useXDR2USD";
import { AppState } from "store/index";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { use100ICPPriceInfo } from "@icpswap/calls";

export function useAccount() {
  return "";
}

export interface SwapToken {
  canisterId: string;
  symbol: string;
  name: string;
}

export function useICPBalance() {
  return useAppSelector((state: AppState) => state.global.ICPBalance);
}

export function useUpdateICPBalanceCallback() {
  const dispatch = useAppDispatch();

  return useCallback(
    async (address: string) => {
      const { data } = await getTokenBalance(ICP_TOKEN_INFO.canisterId, address);
      dispatch(updateICPBalance(new BigNumber(data?.toString() ?? 0)));
      return data;
    },
    [dispatch]
  );
}

export function useICPBlocksManager() {
  const dispatch = useAppDispatch();
  const { result } = useICPBlocksCall();
  const { blocks, secondBlocks } = result ?? {};

  useEffect(() => {
    dispatch(updateICPBlocks({ blocks: blocks ?? "", secondBlocks: secondBlocks ?? "" }));
  }, [dispatch, blocks, secondBlocks]);

  return useMemo(
    () => ({
      blocks,
      secondBlocks,
    }),
    [blocks, secondBlocks]
  );
}

export function useICPPrice() {
  const ICPPriceList = useICPPriceList();

  return useMemo(() => {
    if (ICPPriceList && ICPPriceList.length) {
      const price = ICPPriceList[ICPPriceList.length - 1]["value"];
      return price;
    }
    return undefined;
  }, [ICPPriceList]);
}

export function useICPValue(value: number | null | string | undefined | bigint) {
  const ICPPrice = useICPPrice();

  return useMemo(() => {
    if (!ICPPrice || !value) return undefined;

    return new BigNumber(ICPPrice).multipliedBy(parseTokenAmount(value, WRAPPED_ICP_TOKEN_INFO.decimals));
  }, [ICPPrice, value]);
}

export function useICP2CyclesManager() {
  const ICPPriceList = useICPPriceList();

  return useMemo(() => {
    if (ICPPriceList && ICPPriceList.length) {
      return ICPPriceList[ICPPriceList.length - 1]?.xdr ?? 0;
    }
    return 0;
  }, [ICPPriceList]);
}

export function useXDR2USD() {
  return useAppSelector((state: AppState) => state.global.xdr_usdt);
}

export function useXDR2USDManager(): [number, () => void] {
  const dispatch = useAppDispatch();
  const callback = useXDR2USDCallback();
  const XDR2USD = useXDR2USD();

  return [
    XDR2USD,
    useCallback(async () => {
      const result = await callback();
      if (result && result.XDR_USD) {
        dispatch(updateXDR2USD(result.XDR_USD));
      }
    }, [dispatch]),
  ];
}

export function useICPPriceList() {
  return useAppSelector((state: AppState) => state.global.ICPPriceList);
}

export function useCacheTokenList() {
  return useAppSelector((state: AppState) => state.global.requestTokenList);
}

export function useQueryICPPriceList() {
  const dispatch = useAppDispatch();
  const xdr_usdt = useXDR2USD();

  const { result: listProposals } = use100ICPPriceInfo();

  useEffect(() => {
    if (!listProposals || !xdr_usdt || listProposals.length === 0) return;

    const priceList = listProposals.map((ele) => ({
      value: new BigNumber(new BigNumber(ele.price).times(xdr_usdt || 1.42).toFixed(2)).toNumber(),
      timestamp: ele.timestamp.toString(),
      xdr: ele.price.toString(),
    }));

    dispatch(updateICPPriceList(priceList.reverse()));
  }, [xdr_usdt, listProposals]);
}

export function useGlobalTokenList() {
  return useAppSelector((state: AppState) => state.global.tokenList);
}

export function usePoolStandardManager(): [boolean, (value: boolean) => void] {
  const isInitialed = useAppSelector((state: AppState) => state.global.poolStandardUpdated);
  const dispatch = useAppDispatch();

  const call = useCallback(
    (value: boolean) => {
      dispatch(updatePoolStandardInitialed(value));
    },
    [dispatch]
  );

  return [isInitialed, call];
}
