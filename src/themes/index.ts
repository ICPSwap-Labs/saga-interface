import { createTheme } from "@mui/material/styles";
import colors from "../assets/scss/_themes-vars.module.scss";
import { componentStyleOverrides } from "./compStyleOverride";
import { themePalette } from "./palette";

const fontSize = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.25rem",
};

const Radius = 12;

export interface ThemeOption {
  [key: string]: any;
}

export function theme() {
  return createTheme({
    direction: "rtl",
    palette: themePalette(),
    components: componentStyleOverrides(),
    colors,
    fontSize,
    radius: Radius,
  });
}

export default theme;