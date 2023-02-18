import { createTheme } from "@mui/material";

export function componentStyleOverrides() {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  };
}
