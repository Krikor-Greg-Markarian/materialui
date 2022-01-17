import React from "react";
import CoffeCard from "./CoffeCard";
import { Grid } from "@mui/material";

const Contetnt = (props) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={4}>
        <CoffeCard
          // title='Hamilton Beach FlexBrew'
          // subtitle='$89.99'
          // avatarSrc='https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__340.jpg'
          // imageUrl='https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg'
          // description='Voluptates iusto enim odit possimus neque. Saepe quos quasi non tempore ea! Aliquid obcaecati quo fugit ipsum! Nam beatae neque, consectetur id, quia saepe nihil voluptatibus.'
          AvatarName='A'
          title='LB Single Serve Coffee'
          subHeader='$37.99'
          description='  This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
          imageUrl='https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg'
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeCard
          AvatarName='B'
          title='LB Single Serve Coffee'
          subHeader='$32'
          description='  This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along.'
          imageUrl='https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153__340.jpg'
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeCard
          AvatarName='C'
          title='LB Single Serve Coffee'
          subHeader='$33.43'
          description='  This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests.'
          imageUrl='https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467__340.jpg'
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeCard
          AvatarName='D'
          title='LB Single Serve Coffee'
          subHeader='$23.99'
          description='  This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas.'
          imageUrl='https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__340.jpg'
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeCard
          AvatarName='E'
          title='LB Single Serve Coffee'
          subHeader='$13.99'
          description='  This impressive paella is a perfect party dish and a fun meal to cook
          together.'
          imageUrl='https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeCard
          AvatarName='F'
          title='LB Single Serve Coffee'
          subHeader='$8'
          description='  This impressive paella is a perfect party dish and a fun meal.'
          imageUrl='https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590__480.jpg'
        />
      </Grid>
    </Grid>
  );
};

export default Contetnt;
