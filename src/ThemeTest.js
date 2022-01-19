import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  buttonStyles: {
    backgroundColor: "blue",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "black",
    },
  },
}));


const ThemeTest = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        className={classes.buttonStyles}
        variant='contained'
        color='primary'
      >
        this is a button
      </Button>

      <Typography variant='h1'>this is a typography</Typography>
    </div>
  );
};

export default ThemeTest;
