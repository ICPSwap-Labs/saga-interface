import axios from "axios";
import { useCallback } from "react";
import { useCallsData } from "hooks/useCallsData";
import CyclesMintingService from "@icpswap/nns/build/src/canisters/cyclesMinting/Service";
import { CallResult, ApiResult } from "types/index";

const ROSETTA_API__BASE = "https://rosetta-api.internetcomputer.org";
const INTERNET_COMPUTER_BASE = "https://ic-api.internetcomputer.org/api";

export type ICPTransactionOperation = {
  account: {
    address: string;
  };
  amount: {
    currency: {
      decimals: number;
      symbol: string;
    };
    value: string;
  };
  operation_identifier: {
    index: number;
  };
  status: string;
  type: string;
};

export type ICPTransaction = {
  block_identifier: {
    hash: string;
    index: number;
  };
  transaction: {
    metadata: {
      block_height: number;
      memo: number;
      timestamp: number;
    };
    operations: ICPTransactionOperation[];
    transaction_identifier: {
      hash: string;
    };
  };
};
export interface ICPTransactions {
  total_count: number;
  transactions: ICPTransaction[];
}

export function useICPTransactionsCallback(): (address: string) => Promise<ICPTransactions> {
  return useCallback((address: string) => {
    return axios
      .post(ROSETTA_API__BASE + "/search/transactions", {
        network_identifier: {
          blockchain: "Internet Computer",
          network: "00000000000000020101",
        },
        account_identifier: {
          address,
        },
      })
      .then((res) => {
        if (res.status === 200) return res.data;
        return {};
      });
  }, []);
}

export function useICPTransactionsCall(address: string) {
  const callback = useICPTransactionsCallback();
  return useCallsData(
    useCallback(() => callback(address), [callback, address]),
    !!address
  );
}

export function useICPBlocksCall(): CallResult<ApiResult<{ blocks: string; secondBlocks: string }>> {
  return useCallsData(
    useCallback(async () => {
      const { data: rateBlock } = await axios.get(INTERNET_COMPUTER_BASE + "/metrics/block-rate");
      const { data: pBlock } = await axios.get(INTERNET_COMPUTER_BASE + "/metrics/pblock");

      return {
        blocks: pBlock?.block[0][1],
        secondBlocks: rateBlock?.block_rate[0][1],
      };
    }, [])
  );
}

export function useICP2CyclesCall() {
  // @ts-ignore
  const cyclesMintingService = new CyclesMintingService();
  return useCallsData(cyclesMintingService.getIcpToCyclesConversionRate);
}
