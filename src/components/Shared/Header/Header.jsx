import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import group from "../../../assets/logos/Group 1329.png";
import volunteer from "../../../assets/logos/volunteering.jpeg";
import { useAuth } from "../../../hooks/useAuth";
import "../Header/Header.css";
import { Button, ButtonAdmin } from "./Header.styled";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const { user, logOutUser,admin } = useAuth();
  console.log(user);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
      <li>
        <Link to="/donation">Donation</Link>
      </li>
      <li>
        <Link to="/event">Events</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      {!user && (
        <Link to="/signup">
          <Button className="Btn">Register</Button>
        </Link>
      )}
      
      {user && admin &&
        <ButtonAdmin>
        <Link class="Btn" to="/blog">
          Admin
        </Link>
      </ButtonAdmin>}

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
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6)), url(${volunteer})`,
          backgroundSize: "cover",
          height: "50vh",

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
              {/* <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",

                  textDecoration: "none",
                  flexGrow: 6,
                }}
              >Volunteer NET..</Typography> */}
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
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))} */}
                {pages}
              </Box>

              {/* <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box> */}
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </div>
  );
};

export default Header;
