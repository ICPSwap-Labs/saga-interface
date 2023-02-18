// @ts-nocheck

import React from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { closeSnackbar } from "store/snackbar/actions";
import { Alert, Button, Fade, IconButton } from "@mui/material";
import MuiSnackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

export default function Snackbar() {
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  const snackbarInitial = useAppSelector((state) => state.snackbar);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    dispatch(closeSnackbar());
  };

  React.useEffect(() => {
    setOpen(snackbarInitial.open);
  }, [snackbarInitial.action, snackbarInitial.open]);

  return (
    <React.Fragment>
      {snackbarInitial.variant === "default" && (
        <MuiSnackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={snackbarInitial.autoHideDuration}
          onClose={handleClose}
          message={snackbarInitial.message}
          TransitionComponent={Fade}
        />
      )}

      {snackbarInitial.variant === "alert" && (
        <MuiSnackbar
          TransitionComponent={Fade}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={snackbarInitial.autoHideDuration}
          onClose={handleClose}
        >
          <Alert
            variant="filled"
            severity={snackbarInitial.alertSeverity}
            sx={{
              bgcolor: snackbarInitial.alertSeverity + ".dark",
              color: snackbarInitial.alertSeverity === "warning" ? "grey.800" : "",
            }}
            action={
              <React.Fragment>
                {snackbarInitial.actionButton !== false && (
                  <Button color="secondary" size="small" onClick={handleClose}>
                    UNDO
                  </Button>
                )}
                {snackbarInitial.close !== false && (
                  <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                )}
              </React.Fragment>
            }
          >
            {snackbarInitial.message}
          </Alert>
        </MuiSnackbar>
      )}
    </React.Fragment>
  );
}
