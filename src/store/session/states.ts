export interface SessionState {
  readonly isUnLocked: boolean;
  readonly account: string;
}

export const initialState: SessionState = {
  isUnLocked: false,
  account: "",
};
