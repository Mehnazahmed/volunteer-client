import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { Outlet,Link } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import group from "../assets/logos/Group 1329.png";
import Stack from '@mui/material/Stack';
import {PeopleAltOutlined,AddOutlined} from "@mui/icons-material";
import AllUsers from "../pages/AllUsers/AllUsers";



const drawerWidth = 240;

const adminLayout = () => {
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
            
      
       <Typography fontWeight='bold' color='#111111'>Volunteer Register List</Typography>
       
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
          <ListItem button component={Link}>
           
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
