import { Grid } from "@material-ui/core";
import Header from "../src/Header";
import Contetnt from "../src/Contetnt";

import { typography } from "@mui/system";

export default function Home(props) {
  return (
    <Grid container direction='column'>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}>
          <Contetnt />
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
    </Grid>
  );
}
