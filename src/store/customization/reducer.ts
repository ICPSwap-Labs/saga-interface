import {
  openMenu,
  changeTheme,
  updatePresetColor,
  updateFontFamily,
  updateBorderRadius,
  updateLocal,
  updateMenuOpened,
} from "./actions";
import { initialState } from "./states";

import { createReducer } from "@reduxjs/toolkit";

export default createReducer(initialState, (builder) => {
  builder
    .addCase(openMenu, (state, { payload }) => {
      state.isOpen = [payload];
    })
    .addCase(changeTheme, (state, { payload }) => {
      state.navType = payload;
    })
    .addCase(updatePresetColor, (state, { payload }) => {
      state.presetColor = payload;
    })
    .addCase(updateFontFamily, (state, { payload }) => {
      state.fontFamily = payload;
    })
    .addCase(updateBorderRadius, (state, { payload }) => {
      state.borderRadius = payload;
    })
    .addCase(updateLocal, (state, { payload }) => {
      state.locale = payload;
    })
    .addCase(updateMenuOpened, (state, { payload }) => {
      state.opened = payload;
    });
});
