import { Mail, Notifications } from "@mui/icons-material";
import logo from "../img/logo.jpeg";
import {Link } from "react-router-dom"
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar style={{backgroundColor:"black"}}>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          <div style={{display:"flex"}}>
          
         
          <p>Alien</p>
          </div>
        </Typography>
        {/* <Pets sx={{ display: { xs: "block", sm: "none" } }} /> */}
        <img src={logo} alt="pic" style={{height:"40px"}}/>
       
        <Search>
          <InputBase placeholder="search..." style={{width:"100%",backgroundColor:"white",marginLeft:"-100px",color:"black",padding:"2px" ,borderRadius:"2px"}}/>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography variant="span">Alien</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>
        <Link to="/registration">
        Create Account
        </Link>
        </MenuItem>
        <MenuItem>
        <Link to="/login">
        Login
        </Link>
        </MenuItem>
        
        <MenuItem>
        <Link to="/profile">
        Profile
        </Link>
        </MenuItem>
        <MenuItem>
        <Link to="/logout">
          Logout
        </Link>
        </MenuItem>
        
      </Menu>
    </AppBar>
  );
};

export default Navbar;
