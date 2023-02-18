import config from "../../config";

export interface CustomizationState {
  isOpen: string[];
  fontFamily: string;
  borderRadius: number;
  outlinedFilled: boolean;
  navType: string;
  presetColor: string;
  locale: string;
  rtlLayout: boolean;
  opened: boolean;
}

export const initialState: CustomizationState = {
  isOpen: [], //for active default menu
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  outlinedFilled: config.outlinedFilled,
  navType: config.theme,
  presetColor: config.presetColor,
  locale: config.i18n,
  rtlLayout: config.rtlLayout,
  opened: true,
};
