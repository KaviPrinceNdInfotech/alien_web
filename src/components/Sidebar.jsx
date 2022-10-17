import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom"

const Sidebar = ({mode,setMode}) => {
  return (
    <Box flex={1} p={2}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <Link to="/">
            <ListItemButton component="a">
              <ListItemIcon>
                <Home style={{color:"black"}}/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="/clips">
            <ListItemButton component="a" >
              <ListItemIcon>
                <Article style={{color:"black"}}/>
              </ListItemIcon>
              <ListItemText primary="Clips" />
            </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="/connect">
            <ListItemButton component="a" >
              <ListItemIcon>
                <Group style={{color:"black"}} />
              </ListItemIcon>
              <ListItemText primary="Connect" />
            </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="/explore">
            <ListItemButton component="a">
              <ListItemIcon>
                <Storefront style={{color:"black"}} />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="/friend">
            <ListItemButton component="a">
              <ListItemIcon>
                <Person style={{color:"black"}}/>
              </ListItemIcon>
              <ListItemText primary="Friends" style={{color:"black"}}/>
            </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a">

              <ListItemIcon>
                <Settings  style={{color:"black"}}/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <AccountBox  style={{color:"black"}}/>
              </ListItemIcon>
              <ListItemText primary="Profile"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon  >
                <ModeNight style={{color:"black"}} />
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
