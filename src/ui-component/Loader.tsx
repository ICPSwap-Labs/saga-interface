import { makeStyles } from "@mui/styles";
import LinearProgress from "@mui/material/LinearProgress";

const useStyles = makeStyles(() => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1301,
    width: "100%",
    "& > * + *": {
      marginTop: "16px",
    },
  },
}));

export default function LinearLoader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress color="primary" />
    </div>
  );
}
