import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "../SearchBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(3),
      width: "100%",
      height: theme.spacing(18),
    },
  },
  paper: {
    padding: "20px",
    textAlign: "center",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h4" gutterBottom>
          (React) Google Books Search
        </Typography>
        <Typography variant="h6" gutterBottom>
          Search for and Save Books of Interest
        </Typography>
        <SearchBar />
      </Paper>
    </div>
  );
}
