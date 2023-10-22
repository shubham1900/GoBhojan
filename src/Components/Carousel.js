import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class Carousel_GoBhojan extends Component {
  render() {
    return (
        <Carousel autoPlay={true} interval={3000} showStatus={false} showThumbs={false} stopOnHover={true} infiniteLoop={true}>
        <div>
          <img
            src="Happy_Hour.jpg"
            alt="Happy Hour"
            style={{
              width: "100%",
              height: "auto",
              
            }}
          />
        </div>
        <div>
          <img
            src="dineout.jpg"
            alt="Dine Out"
            style={{
                width: "100%",
              height: "auto",
              
            }}
          />
        </div>
        <div>
          <img
            src="packages.jpg"
            alt="Packages"
            style={{
                width: "100%",
              height: "auto",
              
            }}
          />
        </div>
      </Carousel>
    )
  }
}
