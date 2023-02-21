import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import Routes from "./routes";
import theme from "./themes";
import NavigationScroll from "./layout/NavigationScroll";
import Snackbar from "ui-component/Snackbar";
import SnackbarContext, { Alert } from "ui-component/snackbarContext";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState<Alert>("success");

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme()}>
        <CssBaseline />
        <NavigationScroll>
          <SnackbarContext.Provider value={{ message, open, setOpen, setMessage, setAlert, alert }}>
            <Routes />
            <Snackbar />
          </SnackbarContext.Provider>
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
