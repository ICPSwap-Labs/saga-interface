import { saga } from "actor/index";
import { EventLangRequest } from "did/saga.did";
import { useCallsData } from "@icpswap/calls";
import { useCallback } from "react";
import { makeId } from "utils/saga";
import { EventLang } from "types/saga";
import { getIdentity, useIdentity } from "hooks/useIdentity";
import { enumResultFormat } from "@icpswap/sdk";

export async function create(args: EventLangRequest) {
  const identity = await getIdentity();
  return (await (await saga(identity)).insert(args)) as boolean;
}

export async function deleteSaga(args: string) {
  const identity = await getIdentity();
  return (await (await saga(identity)).delete(args)) as boolean;
}

export function useSagas(reload?: boolean) {
  const identity = useIdentity();

  return useCallsData(
    useCallback(async () => {
      const identity = await getIdentity();
      const sagas = enumResultFormat<EventLang[]>(await (await saga(identity)).find()).data;
      return sagas?.map((saga) => ({ ...saga, _id: makeId() })) as EventLang[];
    }, [identity]),
    true,
    reload
  );
}

export function useSaga(name: string | undefined, reload?: boolean) {
  const identity = useIdentity();

  return useCallsData(
    useCallback(async () => {
      const identity = await getIdentity();
      const sagas = enumResultFormat<EventLang[]>(await (await saga(identity)).get(name!)).data;
      return (sagas ?? []).map((saga) => ({ ...saga, _id: makeId() }))[0] as EventLang;
    }, [identity, name]),
    !!identity && !!name,
    reload
  );
}
