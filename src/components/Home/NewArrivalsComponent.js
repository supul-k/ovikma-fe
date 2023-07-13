import * as React from "react";
import "./NewArrivalsComponent.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarIcon from '@mui/icons-material/Star';
import image1 from "../../assets/cardImage1.jpg";
import image2 from "../../assets/cardImage2.jpg";
import image3 from "../../assets/cardImage3.jpg";
import image4 from "../../assets/careouslImage3.jpg";

const photos = [
  {
    id: "p1",
    title: "Photo One",
    url: image1,
    price: "$49.99",
    rating: 4.5,
    name: "Product One",
  },
  {
    id: "p2",
    title: "Photo Two",
    url: image2,
    price: "$39.99",
    rating: 3.8,
    name: "Product Two",
  },
  {
    id: "p3",
    title: "Photo Three",
    url: image3,
    price: "$59.99",
    rating: 4.2,
    name: "Product Three",
  },
  {
    id: "p4",
    title: "Photo Four",
    url: image4,
    price: "$29.99",
    rating: 4.0,
    name: "Product Four",
  },
];

const renderStarRating = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<StarIcon key={i} className="star-icon filled-star" />);
    } else {
      stars.push(<StarIcon key={i} className="star-icon empty-star" />);
    }
  }
  return stars;
};

const NewArrivalsComponent = () => {
  return (
    <Box sx={{ flexGrow: 1, margin: "60px 0 0 0" }} className="main-box">
      <div className="main-heading">
        <Typography variant="h3" color="initial">
          New Arrivals
        </Typography>
      </div>
      <Box sx={{ flexGrow: 1, margin: "60px" }} className="individ-box">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {photos.map((photo, index) => (
            <Grid item xs={12} sm={6} md={3} key={photo.id}>
              <Card
                sx={{
                  height: "70vh",
                  transform: "scale(1)",
                  transition: "transform 0.3s ease",
                }}
                className="card-new-arrivals"
              >
                <div className="photoCardsNewArrivals-content">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="photoCardsNewArrivals"
                  />
                  <div className="hover-overlay-NewArrivals">
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<AddShoppingCartIcon />}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
              <div className="NewArrivals-product-info">
                <Typography
                  variant="subtitle1"
                  className="NewArrivals-product-price"
                >
                  {photo.price}
                </Typography>
                <div className="NewArrivals-product-rating">
                  {renderStarRating(photo.rating)}
                </div>
                <Typography
                  variant="subtitle2"
                  className="NewArrivals-product-name"
                >
                  {photo.name}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default NewArrivalsComponent;
