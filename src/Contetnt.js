import React from "react";
import CoffeCard from "./CoffeCard";
import { Grid } from "@mui/material";

const Contetnt = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={4}>
        <CoffeCard
          title='Hamilton Beach FlexBrew'
          subtitle='$89.99'
          avatarSrc='https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__340.jpg'
          imageUrl='https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg'
          description='Voluptates iusto enim odit possimus neque. Saepe quos quasi non tempore ea! Aliquid obcaecati quo fugit ipsum! Nam beatae neque, consectetur id, quia saepe nihil voluptatibus veniam minima quaerat soluta quo recusandae eveniet unde, error impedit. Numquam.'
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeCard />
      </Grid>
    </Grid>
  );
};

export default Contetnt;
