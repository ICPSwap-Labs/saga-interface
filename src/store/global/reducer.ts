import { createReducer } from "@reduxjs/toolkit";
import { updateKey } from "./actions";
import { initialState } from "./states";

export default createReducer(initialState, (builder) => {
  builder.addCase(updateKey, (state, { payload }) => {
    return {
      ...state,
      key: payload,
    };
  });
});
