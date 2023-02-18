import { useMemo, useCallback } from "react";
import { ProjectInfo } from "types/voting";
import { usePaginationAllData } from "hooks/usePaginationAllData";
import { getVotingProjects } from "@icpswap/calls";

export function useAllProjects() {
  const fetchRecords = useCallback(async (offset: number, limit: number) => {
    return await getVotingProjects(offset, limit).catch((err) => {
      console.log(err);
      return undefined;
    });
  }, []);

  const { loading, result } = usePaginationAllData<ProjectInfo>(fetchRecords, 500);

  return useMemo(() => {
    return {
      loading,
      result,
    };
  }, [loading, result]);
}
