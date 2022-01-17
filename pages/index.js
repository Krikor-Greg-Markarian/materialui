import { Grid } from "@material-ui/core";
import Header from "../src/Header";
import Contetnt from "../src/Contetnt";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  buttonStyle: {
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    // border: 0,
    // borderRadius: 3,
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    // color: "white",
    // height: 48,
    // width: 220,
    // padding: "0 30px",
    color: "red",
  },
});

export default function Home(props) {
  const classes = useStyles();
  return (
    <Grid container direction='column'>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Contetnt />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
      <Button className={classes.buttonStyle}>Testing button</Button>
    </Grid>
  );
}
