import { useCallback } from "react";
import { isValidQueryPagination, enumResultFormat } from "@icpswap/sdk";
import { useCallsData } from "./useCallsData";
import { Identity, PaginationResult } from "types/index";
import { WrapRecord, MintRequest, WithdrawRequest } from "types/wicp";

export async function exchangeICP2WICP(identity: Identity, params: MintRequest) {
  return enumResultFormat<boolean>(1);
}

export async function exchangeWICP2ICP(identity: Identity, params: WithdrawRequest) {
  return enumResultFormat<boolean>(1);
}

export function useUserExchangeRecord(account: string, offset: number, limit: number, refresh?: boolean) {
  return useCallsData(
    useCallback(async () => {
      return enumResultFormat<PaginationResult<WrapRecord>>(1);
    }, [account, offset, limit]),
    !!account && isValidQueryPagination(offset, limit),
    refresh
  );
}
