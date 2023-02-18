import { createAction } from "@reduxjs/toolkit";

export const openMenu = createAction<string>("customization/openMenu");

export const changeTheme = createAction<string>("customization/changeTheme");

export const updatePresetColor = createAction<string>("customization/updatePresetColor");

export const updateFontFamily = createAction<string>("customization/updateFontFamily");

export const updateBorderRadius = createAction<number>("customization/updateBorderRadius");

export const updateLocal = createAction<string>("customization/updateLocal");

export const updateMenuOpened = createAction<boolean>("customization/updateMenuOpened");
