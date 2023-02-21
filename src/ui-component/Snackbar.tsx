// @ts-nocheck

import { useContext } from "react";
import { Alert, Fade } from "@mui/material";
import MuiSnackbar from "@mui/material/Snackbar";
import SnackbarContext from "ui-component/snackbarContext";

export default function Snackbar() {
  const { message, setOpen, open, alert } = useContext(SnackbarContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <MuiSnackbar
      TransitionComponent={Fade}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <Alert
        variant="filled"
        severity={alert}
        sx={{
          bgcolor: alert + ".dark",
        }}
      >
        {message}
      </Alert>
    </MuiSnackbar>
  );
}
