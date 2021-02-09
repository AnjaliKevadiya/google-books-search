import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
    alignContent: "center",
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        (React) Google Books Search
      </Typography>
      <Typography variant="h6" gutterBottom>
        Search for and Save Books of Interest
      </Typography>
    </div>
  );
}
