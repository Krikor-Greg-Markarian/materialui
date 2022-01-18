import { Button } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
});

const ThemeTest = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant='contained' color='primary'>
        this is a button
      </Button>
    </div>
  );
};

export default ThemeTest;
