import { createTheme } from "@mui/material/styles";
import { componentStyleOverrides } from "./compStyleOverride";
import { themePalette } from "./palette";

const fontSize = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.25rem",
};

export function theme() {
  return createTheme({
    direction: "rtl",
    palette: themePalette(),
    components: componentStyleOverrides(),
    fontSize,
    radius: 12,
  });
}

export default theme;
