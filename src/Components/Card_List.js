import React, { Component } from 'react';
import Card_GoBhojan from './Card_GoBhojan';

export default class Card_List extends Component {
  hotels = [
    {
      image: 'Radisson Blu.png',
      title: 'Radisson Blu',
      description: "Radisson Blu, the world's first designer hotel chain, offers upscale accommodations in major cities, key airports, and leisure destinations since 1960.",
      dynamicDiscount: '10% off',
    },
     {
       image: 'Oberoi Hotel.png',
       title: 'Oberoi Hotel',
       description: "Oberoi pioneered the idea of luxury hospitality in India by opening their first hotel.",
       dynamicDiscount: '15% off',
     },
    // Add more hotel data as needed
  ];

  render() {
    return (
      <div>
        {this.hotels.map((hotel, index) => (
          <Card_GoBhojan
            key={index}
            image={ hotel.image}
            title={hotel.title}
            description={hotel.description}
            dynamicDiscount={hotel.dynamicDiscount}
          />
        ))}
      </div>
    );
  }
}
