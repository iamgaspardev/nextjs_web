"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Service from '@/services/service';
import React, { useState, useEffect } from 'react';
import { Typography } from "@mui/material";

const CarouselSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carouselData = new Service();
        const response = await carouselData.getCarousel();
        setData(response); 
        
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };

    fetchData();
  }, []);
//   console.log("data ---------------------",data)
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      {data.length > 0 && (
        <Carousel responsive={responsive} autoPlay>
          {data.map(item => (
            <div key={item.mainBannerId}>
              <img src={item.pcImageUrl} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default CarouselSlider;
