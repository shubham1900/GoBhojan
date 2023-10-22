import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


export default function Card_GoBhojan(props) {
  let { image, title, description, dynamicDiscount } = props;
  let [isFavorite,setIsFavorite ]=useState(false);
  let handleFavoriteToggle=() =>{
setIsFavorite(!isFavorite);
  }

  return (
    <Card sx={{ height: "20%", width: "20%" }}>
      <CardMedia
        sx={{ height: 140 }} 
        image={image} 
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="body2" color={"black"}>
        {description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small" onClick={() => setIsFavorite(!isFavorite)}>
          {isFavorite ? "Favorite: Yes" : "Favorite: No"}
        </Button> */}
        <IconButton onClick={handleFavoriteToggle} color="primary">
          {isFavorite? <FavoriteIcon />:<FavoriteBorderIcon />}
        </IconButton>

        <Typography>Current Discount: {dynamicDiscount}</Typography>
      </CardActions>
    </Card>
  );
}
