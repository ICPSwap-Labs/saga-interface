import React from "react";
import { makeStyles } from "@mui/styles";
import { CssBaseline, Box } from "@mui/material";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => {
  return {
    content: {
      background: "transparent",
      width: "100%",
      minHeight: "calc(100vh - 64px)",
      flexGrow: 1,
      padding: "20px",
      borderRadius: "8px",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    mainContent: {
      paddingTop: "64px",
    },
  };
});

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      <Box className={classes.mainContent}>
        <main className={classes.content}>{children}</main>
      </Box>
    </>
  );
}
