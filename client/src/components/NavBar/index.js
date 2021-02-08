import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  //   title: {
  //     flexGrow: 1,
  //   },
  subTitle: {
    float: "right",
    marginLeft: "20px",
    marginTop: "4px",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Google Books
          </Typography>

          <Typography className={classes.subTitle}>Search</Typography>
          <Typography className={classes.subTitle}>Saved</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
