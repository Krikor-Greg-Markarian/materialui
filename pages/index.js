import { Box, Container, Grid, Typography } from "@material-ui/core";
import Header from "../src/Header";
import Contetnt from "../src/Contetnt";
import { Button } from "@mui/material";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import axios from "axios";
import CoffeCard from "../src/CoffeCard";
import CoolButton from "../src/CoolButton";
import TypesOfButtons from "../src/TylesOfButtons";
import { typography } from "@mui/system";
import ThemeTest from "../src/ThemeTest";
import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#CCCCCC",
    },
  },
});

const useStyles = makeStyles({
  buttonStyles: {
    color: "blue",
  },
});

// const useStyles = makeStyles({
//   buttonStyle: {
//     // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//     // border: 0,
//     // borderRadius: 3,
//     // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//     // color: "white",
//     // height: 48,
//     // width: 220,
//     // padding: "0 30px",
//     color: "red",
//   },
//   textStyle: {
//     color: "green",
//   },
// });

// const useStyles = makeStyles({
//   typographyStyles: {
//     color: "red",
//   },
// });

export default function Home(props) {
  const classes = useStyles();
  const cool = false;

  return (
    <Grid container direction='column'>
      <Grid item>
        <Header />
      </Grid>
      <Grid item xs={false} sm={2} />
      <Container fixed>
        <Grid spacing={2} item container>
          {props.boxData.map((item, idx) => (
            <Grid item xs={12} sm={4}>
              <CoffeCard
                avatarName={item.avatarName}
                title={item.title}
                subHeader={item.subHeader}
                description={item.description}
                imageUrl={item.imageUrl}
              />
            </Grid>
          ))}
          <Grid item xs={false} sm={2} />
        </Grid>
      </Container>

      {/* <Button className={classes.buttonStyle}>Testing button</Button>
      <h1 className={classes.textStyle}>Hello World</h1> */}
      {/* <CoolButton cool={cool} /> */}

      {/* <TypesOfButtons /> */}
      {/* <Button
        className={classes.root}
        variant='outlined'
        color='primary'
        size='small'
      >
        small button
      </Button> */}
      {/* <Typography
        // gutterBottom
        // variant='h1'
        // noWrap
        // color='secondary'
        //  align="center"
        // variant = "h1"
        className={classes.typographyStyles}
      >
        Hello
      </Typography> */}

      {/* <Button className={classes.buttonStyles}>
        hello my name is a button
      </Button> */}

      <ThemeProvider theme={theme}>
        <ThemeTest></ThemeTest>
      </ThemeProvider>
    </Grid>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get("http://localhost:3000/api/hello");

  return {
    props: {
      boxData: response.data.boxData,
    }, // will be passed to the page component as props
  };
}
