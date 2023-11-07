import React, { Component } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Card_GoBhojan from "./Card_GoBhojan";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card_List from "./Card_List";

const accordionStyle = {
  backgroundColor: "#607D8B",
  borderRadius: "5px",
};

export default class Accordion_GoBhojan extends Component {
  
  render() {
    return (
      <div>
        <Accordion sx={accordionStyle} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="cuisine-type-header"
            id="cuisine-type-header"
          >
            <Typography color={"white"}>Cuisine Type</Typography>
            <Typography align="center" sx={{width:'100%'}} color={"white"} >Global culinary delights.</Typography>
          
          </AccordionSummary>
          <AccordionDetails>
          
            <Typography color={"white"}>
              Embark on a global culinary journey with our diverse Cuisine Type.
              From the spicy streets of India to the exotic flavors of Thailand,
              we've got your taste buds covered." "Explore the world on a plate
              with our Cuisine Type. Discover a symphony of tastes and spices
              that will transport you to far-off lands.
            </Typography>
            
          </AccordionDetails>
          <Card_List />
        </Accordion >
        <Accordion sx={accordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="fine dine header"
            id="fine dine header"
          >
            <Typography color={"white"}>fine dine</Typography>
            <Typography align="center" sx={{width:'100%'}} color={"white"}>Elegant dining experience.</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color={"white"}>
              Elevate your dining experience to a level of sophistication and
              elegance. Our Fine Dine category offers an exquisite menu in an
              ambiance that exudes luxury." "For those special occasions or when
              you simply want to indulge, our Fine Dine category presents a menu
              of culinary artistry and impeccable service.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="casual-type-header"
            id="casual-type-header"
          >
            <Typography color={"white"}>Casual Dine</Typography>
            <Typography align="center" sx={{width:'100%'}} color={"white"}>Relaxed, flavorful dining.</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color={"white"}>
              Enjoy a relaxed and comfortable dining experience in our Casual
              Dine category. It's the perfect place to unwind, catch up with
              friends, and savor delicious food." "Casual Dine is all about good
              food, good company, and a laid-back atmosphere. Expect a menu
              that's both comforting and flavorful.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="FastFood-type-header"
            id="FastFood-type-header"
          >
            <Typography color={"white"}>Fast Food</Typography>
            <Typography align="center" sx={{width:'100%'}} color={"white"}>Quick, delicious bites.</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography color={"white"}>
              When you're in the mood for quick and delicious bites, look no
              further than our Fast Food selection. It's a paradise for those
              who crave instant gratification." "Fast Food doesn't compromise on
              flavor or convenience. Dive into a world of mouthwatering burgers,
              crispy fries, and other fast-paced delights.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
}
