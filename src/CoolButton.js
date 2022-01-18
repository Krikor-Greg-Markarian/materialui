import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { buttonBaseClasses } from "@mui/material";

const useStyles = makeStyles({
  buttonStyles: {
    color: (props) => (props.cool ? "blue" : "red"),
    backgroundColor: (props) => (props.cool ? "orange" : "pink"),
  },
});

const CoolButton = (props) => {
  const classes = useStyles(props);
  return (
    <button className={classes.buttonStyles}>this is a cool button</button>
  );
};

export default CoolButton;
