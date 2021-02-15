import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
  textfield: {
    height: "20px",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function SearchBar() {
  const classes = useStyles();

  return (
    <div>
      {/* <form className={classes.root} noValidate autoComplete="off"> */}
      <TextField
        id="outlined-basic"
        label="Search for book"
        variant="outlined"
        className={classes.textfield}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
      {/* </form> */}
    </div>
  );
}

export default SearchBar;
