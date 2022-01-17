import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import ShareIcon from "@mui/icons-material/Share";
import { CardMedia, IconButton } from "@mui/material";
const bull = (
  <Box
    component='span'
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const CoffeCard = (props) => {
  const { avatarSrc, title, subtitle, description } = props;
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar src={avatarSrc} sx={{}} aria-label='recipe'>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia
        component='img'
        height='194'
        image={props.imageUrl}
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='body2'>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>BUY NOW</Button>
        <Button size='small'>OFFER</Button>
      </CardActions>
    </Card>
  );
};

export default CoffeCard;
