import React, { useState, useEffect } from "react";
import "./CareouselComponent.css";
import { Typography, Button } from "@mui/material";
import image1 from "../../assets/careouslImage1.jpg";
import image2 from "../../assets/careouslImage2.jpg";
import image3 from "../../assets/careouslImage3.jpg";

const CarouselComponent = () => {
  const headings = ["Oh, Hello Newness!", "Summer Collection", "Spring Collection"];
  const Subheadings = ["SALE UP TO 30% OFF", "SALE UP TO 30% OFF", "SALE UP TO 30% OFF"];
  const photos = [
    {
      id: "p1",
      title: "Photo One",
      url: image1,
    },
    {
      id: "p2",
      title: "Photo Two",
      url: image2,
    },
    {
      id: "p3",
      title: "Photo Three",
      url: image3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % photos.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, photos.length]);

  return (
      <>
        <div className="slider-container" style={{ width: "100%" }}>
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={
                photos[currentIndex].id === photo.id ? "fade" : "slide fade"
              }
            >
              <img src={photo.url} alt={photo.title} className="photo" />
              <div className="caption">
                <Typography variant="h4" align="center" className="subheading">
                  {Subheadings[index]}
                </Typography>
                <Typography variant="h1" align="center" className="heading">
                  {headings[index]}
                </Typography>
                <Button variant="outlined" size="large" className="shop-now">
                  SHOP NOW
                </Button>
              </div>
            </div>
          ))}

          <button onClick={prev} className="prev">
            <span>&lt;</span>
          </button>

          <button onClick={next} className="next">
            <span>&gt;</span>
          </button>
        </div>
      </>
  );
};

export default CarouselComponent;
