export type Values = { [key: string]: any };

export interface LaunchpadState {
  readonly step: number;
  readonly values: Values;
}

export const initialState: LaunchpadState = {
  step: 0,
  values: {},
};
