import React, { useState, useEffect } from "react";
import "./ReviewsComponent.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
import image1 from "../../assets/careouslImage1.jpg";
import image2 from "../../assets/careouslImage2.jpg";
import image3 from "../../assets/careouslImage3.jpg";

const ReviewsComponent = () => {
  const reviews = [
    {
      id: "p1",
      title: "Review One",
      url: image1,
      name: "supul kalhara",
      description:
        "Supul kalhara recently purchased this dress and I absolutely love it! The fit is perfect and the quality is excellent. The design is elegant and it's so comfortable to wear. I received many compliments when I wore it to a party. Highly recommended!",
      rating: "4",
    },
    {
      id: "p2",
      title: "Review Two",
      url: image2,
      name: "kasun kalhara",
      description:
        "Kasun kalhara recently purchased this dress and I absolutely love it! The fit is perfect and the quality is excellent. The design is elegant and it's so comfortable to wear. I received many compliments when I wore it to a party. Highly recommended!",
      rating: "3",
    },
    {
      id: "p3",
      title: "PhoReviewto Three",
      url: image3,
      name: "dasun kalhara",
      description:
        "Dasun kalhara recently purchased this dress and I absolutely love it! The fit is perfect and the quality is excellent. The design is elegant and it's so comfortable to wear. I received many compliments when I wore it to a party. Highly recommended!",
      rating: "2",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <StarIcon key={i} className="star-icon-review filled-star-review" />
        );
      } else {
        stars.push(
          <StarIcon key={i} className="star-icon-review empty-star-review" />
        );
      }
    }
    return stars;
  };

  const next = () => {
    setCurrentIndex((currentIndex + 1) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % reviews.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, reviews.length]);

  return (
    <>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          sm={8}
          md={7}
          lg={7}
          xl={7}
          sx={{ width: "60%", backgroundColor: 'antiquewhite' }}
          elevation={6}
          square
        >
          <div className="slider-container-review" style={{ width: "100%" }}>
            <div
              className={`review-details ${
                currentIndex !== 0 ? "slide-next" : ""
              }`}
            >
              <Typography
                sx={{ marginBottom: "20px" }}
                variant="h6"
                className="review-subheading"
              >
                The Reviews Are In
              </Typography>
              <div className="review-rating">
                {renderStarRating(reviews[currentIndex].rating)}
              </div>
              <Typography
                sx={{ margin: " 40px 0 40px 0" }}
                variant="subtitle1"
                className="review-description"
              >
                "{reviews[currentIndex].description}"
              </Typography>
              <Typography variant="subtitle2" className="review-name">
                -{reviews[currentIndex].name}-
              </Typography>
              <button onClick={next} className="next-Review">
                <span>&gt;</span>
              </button>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={5}
          lg={5}
          xl={5}
          sx={{
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundPosition: "center",
          }}
        >
          <div className="review-image">
            <img
              src={reviews[currentIndex].url}
              alt={reviews[currentIndex].title}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ReviewsComponent;
