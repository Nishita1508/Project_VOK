import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

// Sample data for hotel cards
const hotels = [
  {
    name: 'Saffron Sunset Resort',
    location: 'Goa, India',
    image: '../Hotel_pics/Home/carousel.jpg',
    description: 'Enjoy the luxury stay at our beautiful beach resort.',
  },
  {
    name: 'Ocean View Hotel',
    location: 'Miami, USA',
    image: '../Hotel_pics/Home/carousel2.jpeg',
    description: 'Experience a luxurious stay with stunning ocean views.',
  },
  {
    name: 'Mountain Retreat',
    location: 'Himalayas, Nepal',
    image: '../Hotel_pics/Home/carousel1.jpeg',
    description: 'Escape to the mountains with our peaceful retreats.',
  },

  {
    name: 'Mountain Retreat',
    location: 'Himalayas, Nepal',
    image: '../Hotel_pics/Home/carousel.webp',
    description: 'Escape to the mountains with our peaceful retreats.',
  },
  {
    name: 'Ocean View Hotel',
    location: 'Miami, USA',
    image: '../hotel.jpg',
    description: 'Experience a luxurious stay with stunning ocean views.',
  },
  // Add more hotel details as needed
];

// Styled Components for Card Design
const Card = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
`;

const HotelImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const HotelName = styled.h3`
  font-size: 18px;
  color: #ff6f61;
  margin: 10px 0;
`;

const HotelLocation = styled.p`
  font-size: 14px;
  color: #777;
`;

const HotelDescription = styled.p`
  font-size: 14px;
  color: #555;
`;

const HotelCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {hotels.map((hotel, index) => (
        <Card key={index}>
          <HotelImage src={hotel.image} alt={hotel.name} />
          <HotelName>{hotel.name}</HotelName>
          <HotelLocation>{hotel.location}</HotelLocation>
          <HotelDescription>{hotel.description}</HotelDescription>
        </Card>
      ))}
    </Slider>
  );
};

export default HotelCarousel;
