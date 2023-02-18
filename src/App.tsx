import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import Routes from "./routes";
import theme from "./themes";
import NavigationScroll from "./layout/NavigationScroll";
import Snackbar from "ui-component/Snackbar";

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme()}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
          <Snackbar />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
