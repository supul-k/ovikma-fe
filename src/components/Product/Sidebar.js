import React, {useState} from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography, List, ListItem, ListItemIcon, ListItemText, Box, Collapse } from '@mui/material';
import { Description, CollectionsBookmark, ExpandLess, ExpandMore, EventAvailable, AttachMoney, ColorLens, NewReleases } from '@mui/icons-material';

const theme = createTheme({
  sidebar: {
    backgroundColor: 'gray',
    maxWidth: '20vw',
    padding: '16px',
    width: '250px',
  },
  nested: {
    marginLeft: '30px',
  },
});

const collections = ["Clothes", "Shoes", "Dresses","Kids"];
const availability = ["In Stock", "Out of Stock"];
const colors = ["EggShell", "PineTree"];


const Sidebar = () => {
  const [openCollections, setOpenCollections] = useState(true);
  const [openAvailability, setOpenAvailability] = useState(true);
  const [openColor, setOpenColor] = useState(true);

  const handleCollectionsClick = () => {
    setOpenCollections(!openCollections);
  };

  const handleAvailabilityClick = () => {
    setOpenAvailability(!openAvailability);
  };

  const handleColorClick = () => {
    setOpenColor(!openColor);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={theme.sidebar}>
        <Typography variant="h6" gutterBottom>
          Product Menu
        </Typography>
        <List component="nav">
        <ListItem button onClick={handleCollectionsClick}>
            <ListItemIcon>
              <CollectionsBookmark />
            </ListItemIcon>
            <ListItemText primary="Collections" />
            {openCollections ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openCollections} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {collections.map((collection, index) => (
                <ListItem button className={theme.nested} key={index}>
                  <ListItemIcon>
                    <Description />
                  </ListItemIcon>
                  <ListItemText primary={collection} />
                </ListItem>
              ))}
            </List>
          </Collapse>
          <ListItem button onClick={handleAvailabilityClick}>
            <ListItemIcon>
              <EventAvailable />
            </ListItemIcon>
            <ListItemText primary="Availability" />
            {openAvailability ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openAvailability} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
              {availability.map((available, index) => (
                <ListItem button className={theme.nested} key={index}>
                  <ListItemIcon>
                    <Description />
                  </ListItemIcon>
                  <ListItemText primary={available} />
                </ListItem>
              ))}
            </List>
          </Collapse>
          <ListItem button>
            <ListItemIcon>
              <AttachMoney />
            </ListItemIcon>
            <ListItemText primary="Price Range" />
          </ListItem>
          <ListItem button onClick={handleColorClick}>
            <ListItemIcon>
              <ColorLens />
            </ListItemIcon>
            <ListItemText primary="Color" />
            {openColor ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openColor} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <List component="div" disablePadding>
              {colors.map((color, index) => (
                <ListItem button className={theme.nested} key={index}>
                  <ListItemIcon>
                    <Description />
                  </ListItemIcon>
                  <ListItemText primary={color} />
                </ListItem>
              ))}
            </List>
            </List>
          </Collapse>
          <ListItem button>
            <ListItemIcon>
              <NewReleases />
            </ListItemIcon>
            <ListItemText primary="Featured Products" />
          </ListItem>
        </List>
      </Box>
    </ThemeProvider>
  );
};

export default Sidebar;
