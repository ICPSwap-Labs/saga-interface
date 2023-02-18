import BigNumber from "bignumber.js";
import { nanosecond2Millisecond } from "../index";
import { LAUNCHPAD_STATUS, EXCHANGE_RATIO_DECIMALS } from "constants/launchpad";
import { t } from "@lingui/macro";

export function getIDOStatus(pool: any): {
  statusText: string;
  claimable: boolean;
  statusClassName: string;
  status: LAUNCHPAD_STATUS;
} {
  let statusText = "";
  let statusClassName = "";
  let status = LAUNCHPAD_STATUS.ONGOING;

  if (new BigNumber(pool.startDateTime).dividedBy(1000000).isGreaterThan(new Date().getTime())) {
    statusText = t`Upcoming`;
    statusClassName = "upcoming";
    status = LAUNCHPAD_STATUS.UPCOMING;
  } else {
    if (new BigNumber(pool.endDateTime).dividedBy(1000000).isLessThan(new Date().getTime())) {
      statusText = t`Finished`;
      statusClassName = "finished";
      status = LAUNCHPAD_STATUS.FINISHED;
    } else {
      statusText = t`Live`;
      statusClassName = "ongoing";
      status = LAUNCHPAD_STATUS.ONGOING;
    }
  }

  const claimable = new BigNumber(nanosecond2Millisecond(pool.endDateTime)).isLessThan(new Date().getTime());

  return {
    statusText,
    status,
    statusClassName,
    claimable,
  };
}

export function formatExchangeRatio(value: string | number | BigInt) {
  return new BigNumber(10 ** EXCHANGE_RATIO_DECIMALS).multipliedBy(String(value));
}

export function parseExchangeRatio(value: string | number | BigInt) {
  return new BigNumber(String(value)).div(10 ** EXCHANGE_RATIO_DECIMALS);
}

export function timeParser(time: any): Date {
  const date = new Date(time);
  const seconds = date.getSeconds();
  return new Date(date.getTime() - seconds * 1000);
}
