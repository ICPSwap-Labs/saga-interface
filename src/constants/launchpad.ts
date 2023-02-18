export enum LAUNCHPAD_STATUS {
  ONGOING = "ongoing",
  UPCOMING = "upcoming",
  FINISHED = "finished",
}

export const LAUNCHPAD_STATUS_COLORS = {
  [LAUNCHPAD_STATUS.UPCOMING]: "#5669DC",
  [LAUNCHPAD_STATUS.ONGOING]: "#54C081",
  [LAUNCHPAD_STATUS.FINISHED]: "#8492C4",
};

export const EXCHANGE_RATIO_DECIMALS = 18;

export const TICKET_STORAGE_NAME = "LaunchpadTicket";
