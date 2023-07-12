import * as React from "react";
import "./NewArrivalsComponent.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import image1 from "../../assets/cardImage1.jpg";
import image2 from "../../assets/cardImage2.jpg";
import image3 from "../../assets/cardImage3.jpg";
import image4 from "../../assets/careouslImage3.jpg";
import Typography from '@mui/material/Typography';


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
  {
    id: "p4",
    title: "Photo Four",
    url: image4,
  },
];

// const CardButton = ["DRESSES", "CLOTHING", "SHOES", "KIDS"];

const NewArrivalsComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="main-box">
      <div className="main-heading">
        <Typography variant="h3" color="initial">
          New Arrivals
        </Typography>
      </div>
      <Box sx={{ flexGrow: 1, margin: "60px" }} className="individ-box">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {photos.map((photo, index) => (
            <Grid item xs={12} sm={6} md={3} key={photo.id}>
              <Card sx={{ height: "70vh" }} className="card-new-arrivals">
                <div className="card-content">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="photoCards"
                  />
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default NewArrivalsComponent;
