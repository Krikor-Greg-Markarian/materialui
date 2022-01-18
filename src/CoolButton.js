import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { buttonBaseClasses } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  buttonStyles: (props) => {
    return {
      color: props.cool ? "blue" : "red",
      [theme.breakpoints.up("sm")]: {
        color: "cyan",
      },
      backgroundColor: props.cool ? "orange" : "yellow",
    };
  },
}));

const CoolButton = (props) => {
  const classes = useStyles(props);
  return (
    <button fullWidth className={classes.buttonStyles}>
      this is a cool button
    </button>
  );
};

export default CoolButton;
