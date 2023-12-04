import MenuIcon from "@mui/icons-material/Menu";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import group from "../../../assets/logos/Group 1329.png";
import volunteer from "../../../assets/logos/volunteering.jpeg";
import useAdmin from "../../../hooks/useAdmin";
import { useAuth } from "../../../hooks/useAuth";
import "../Header/Header.css";
import { Button, ButtonAdmin } from "./Header.styled";


const Header = () => {
  const { user, logOutUser} = useAuth();
  console.log(user);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [isAdmin] =useAdmin();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogOut = () => {
    logOutUser();
  };

  const pages = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {user &&<li>
        <Link to="/eventsLayout/userDashboard">User</Link>
      </li>}
      <li>
        <Link to="/eventsLayout">Events</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      
      {!user && (
        <Link to="/signup">
          <Button className="Btn">Register</Button>
        </Link>
      )}
      
      {user && isAdmin  &&  
        <Link  to="/admin">
        <ButtonAdmin className="Btn">
          Admin
       
      </ButtonAdmin>
      </Link>
      }

      {user && (
        <>
          <Button onClick={handleLogOut} className="Btn">
            Logout
          </Button>
         <li>
         <Typography  sx={{ color: "#191919" }}>
            {user.displayName}
          </Typography>
         </li>
        </>
      )}

    </>
  );
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${volunteer})`,
          backgroundSize: "cover",
          height: "60vh",
          position: 'relative', zIndex: 1,

          width: "100%",

          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
      >
        <AppBar
          sx={{
            position: "relative",
            boxShadow: "none",

            backgroundColor: "rgba(255, 255, 255, 0)", // Adjust the RGBA values and opacity as needed
          }}
          position="static"
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
             
              <Box sx={{flexGrow: 6}}><img src={group} style={{width:'180px', marginTop:'1rem' }} /></Box>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages}
                </Menu>
              </Box>
             
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              
                {pages}
              </Box>

              
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </div>
  );
};

export default Header;
