import React, { useState } from 'react';
import axios from "axios";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function LoginPage({ openLoginModal, onCloseLoginModal }) {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    receiveEmails: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
    console.log({ ...formData, [name]: fieldValue });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/register", formData);
      console.log(response.data);
      // Handle success or display a success message
      console.log("Submitted Form Data:", formData);
    } catch (error) {
      console.log(error);
      // Handle error or display an error message
    }
  };

  const theme = createTheme({
    components: {
      MuiModal: {
        styleOverrides: {
          root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: "white", 
            borderColor: 'black',
          },
        },
      },
      MuiGrid: {
        styleOverrides: {
          root: {
            margin: "0 auto",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            width: '90%',
            margin: "0 auto",
            "& .MuiInputLabel-root.Mui-focused": {
              color: "black", 
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "black", 
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            margin: "0 auto",
            width: '90%',
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h5: {
            color: "rgba(0, 0, 0, 0.54)", 
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={openLoginModal}
        onClose={onCloseLoginModal}
      >
          <Card component="main" sx={{ mb: 6 }}>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "black" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign In
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ 
                  m: 3,
                  display: "grid", 
                  justifyContent: "center"
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "#cb8161",
                    "&:hover": {
                      backgroundColor: "black",
                    },
                  }}
                >
                  SIGN IN
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mb: 2,
                    backgroundColor: "transparent",
                    color: "black",
                    border: "1px",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "whites",
                    },
                  }}
                >
                  CREATE YOUR ACCOUNT
                </Button>
              </Box>
            </Box>
          </Card>
      </Modal>
    </ThemeProvider>
  );
}