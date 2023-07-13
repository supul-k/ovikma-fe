import * as React from "react";
import "./CategoryComponent.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import image1 from "../../assets/category11.jpg";
import image2 from "../../assets/category22.jpg";
import image3 from "../../assets/category33.jpg";
import image4 from "../../assets/category44.jpg";

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

const CardButton = ["DRESSES", "CLOTHING", "SHOES", "KIDS"];

const CategoryComponent = () => {
  return (
    <Box sx={{ flexGrow: 1, margin: "60px" }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {photos.map((photo, index) => (
          <Grid item xs={12} sm={6} md={3} key={photo.id}>
            <Card
              sx={{
                height: "70vh",
              }}
              className="mainCard"
            >
              <div className="card-content">
                <img src={photo.url} alt={photo.title} className="photoCards" />
              </div>
              <div className="captionCards">
                <Button
                  variant="outlined"
                  size="large"
                  className="show-cat no-shake"
                >
                  {CardButton[index]}
                </Button>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryComponent;
