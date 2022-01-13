import { PortraitSharp } from "@mui/icons-material";
import React from "react";

function Button(props) {
  return (
    <div>
      <button
        disabled={props.loading ? true : false}
        onClick={props.onClick}
        className={cn(props.className)}
      >
        {props.loading ? (
          <div className={cn("text-white animate-spin")}>
            <BiLoaderCircle />
          </div>
        ) : (
          props.buttonName
        )}
      </button>
    </div>
  );
}

export default Button;
