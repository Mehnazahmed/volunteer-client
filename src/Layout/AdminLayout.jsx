import { AddOutlined, PeopleAltOutlined } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from '@mui/material/Stack';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import group from "../assets/logos/Group 1329.png";
import AllUsers from "../pages/AllUsers/AllUsers";





const adminLayout = () => {
    const location = useLocation();

    // Function to determine the text based on the current path
    const getTitleText = () => {
      const { pathname } = location;
      switch (pathname) {
        case "/admin/users":
          return "Volunteer List";
        case "/admin/addevent":
          return "Add Event";
        default:
          return "Volunteer List"; // You can set a default title here
      }
    };
  return (
    <Box sx={{ display: "flex" }}>
     
      <AppBar
      position="fixed"
      sx={{
        height:'70px',
        backgroundColor: '#FFFFFF',
        boxShadow:'none'
      }}
       
      >
       <Stack direction='row' spacing={3}>
       <img
          style={{ width: "180px",padding:'5px'}}
          src={group}
          alt=""
          srcset=""
        />
        
        
        <Toolbar>
            
      
       <Typography fontWeight='bold' color='#111111'>{getTitleText()}</Typography>
       
        </Toolbar>
       </Stack>
      </AppBar>
      <Drawer
        sx={{
          width:'170px', 
          flexShrink: 0,
          padding: 0,
          "& .MuiDrawer-paper": {
            width: "190px",
            boxSizing: "border-box",
            zIndex:'0'
          },
        }}
        variant="permanent"
      >
      
        
        
        <List sx={{marginTop:'70px'}}>
          <ListItem to='/admin/users' button component={Link}>
            
              
              < PeopleAltOutlined sx={{marginRight:'1rem'}}/>
            
            <ListItemText primary="Volunteer List" />
          </ListItem>
          <ListItem to='/admin/addevent' button component={Link}>
           
              <AddOutlined sx={{marginRight:'1rem'}} />
            
            
            <ListItemText primary="Add Event" />
          </ListItem>
         
        </List>
      </Drawer>
      <Box
      
     
      marginTop='70px'
      bgcolor='#E5E5E5'
        component="main"
        sx={{
           height:'100vh' ,
          flexGrow: 1,
          p: 3,
        }}
      >
       <Box >
       
       <Outlet>
            <AllUsers />
          </Outlet>
        
       </Box>
      </Box>
    </Box>
  );
};

export default adminLayout;
