import { Typography } from "@material-ui/core";
import React from "react";

const Paper = (props) => {
  return (
    <div>
      <Paper style={{ borderradious: "10px" }} elevation='1' square>
        <Typography variant='h6'>This is my typography</Typography>
      </Paper>
    </div>
  );
};

export default Paper;
