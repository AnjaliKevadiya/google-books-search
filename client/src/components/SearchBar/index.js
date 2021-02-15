import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch",
    },
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
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Search
      </Button>
      {/* </form> */}
    </div>
  );
}

export default SearchBar;
