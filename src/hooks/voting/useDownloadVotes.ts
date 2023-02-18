import { useState, useMemo, useCallback } from "react";
import { nanosecond2Millisecond, valueofUser } from "@icpswap/sdk";
import { getVotingTransactions } from "@icpswap/calls";
import { UserVoteRecord } from "types/voting";
import { usePaginationAllDataCallback } from "hooks/usePaginationAllData";
import { writeFileOneSheet } from "utils/xlsx";
import dayjs from "dayjs";

export function useDownloadVotes(canisterId: string, id: string, limit?: number): [boolean, () => void] {
  const [loading, setLoading] = useState(false);

  const fetchRecords = useCallback(async (offset: number, limit: number) => {
    return await getVotingTransactions(canisterId, id, offset, limit);
  }, []);

  const fetchAllRecords = usePaginationAllDataCallback<UserVoteRecord>(
    fetchRecords,
    limit ?? 1000,
    (content: UserVoteRecord[]) => {
      console.log(content);

      let data = content.map((d) => {
        return {
          Timestamp: dayjs(nanosecond2Millisecond(d.voteTime)).format("YYYY-MM-DD HH:mm:ss"),
          Address: valueofUser(d.address).toString(),
          Power: String(d.usedProof),
          Value: d.options[0].k,
        };
      });

      writeFileOneSheet(data, `${id}_proposal_votes`, "Votes");

      setLoading(false);
    }
  );

  return useMemo(
    () => [
      loading,
      () => {
        setLoading(true);
        fetchAllRecords();
      },
    ],
    [loading, fetchAllRecords, setLoading]
  );
}
