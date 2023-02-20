import { createTheme } from "@mui/material/styles";
import { componentStyleOverrides } from "./compStyleOverride";

const fontSize = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.25rem",
};

export function theme() {
  return createTheme({
    palette: {
      mode: "light",
    },
    components: componentStyleOverrides(),
    fontSize,
  });
}

export default theme;
