import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useEvents from "../../../hooks/useEvents";

const EventCard = ({ event }) => {
  const { refetch } = useEvents();
  const [axiosSecure] =useAxiosSecure();

  const handleDeleteEvent =(event)=>{
     console.log(event._id);
     Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result)=>{
      if(result.isConfirmed){
          axiosSecure.delete(`/events/${event._id}`)
          .then((res)=>{
              const data =res.data;
              if(data.deletedCount>0){
                refetch();
                Swal.fire('Deleted Successfully')
              }
          });
      }
    });

  }

  return (
    <Card
      sx={{
        display: "flex",
        maxWidth: "430px",
       
        height: "auto",
        mx:'auto',
        width:'100%'
        
        
      
        
      }}
    >
      <CardMedia
        component="img"
        sx={{
          
          maxWidth: "194px",
          height: "180px",
          borderRadius: 6,
          padding: 2,
          display: "flex",
          m:0
          
        }}
        image={event.image}
        alt="Live from space album cover"
      />
      <Box sx={{ 
        display: "flex", 
        width:'100%',
        flexDirection: "column",
        
        
        }}>
        <CardContent sx={{pr:0,pl:0}} >
          <Typography
            component="div"
            variant="h6"
            lineHeight='1.3'
            
            
            sx={{ color: "#0B0B0B", fontWeight: "bold", fontFamily: "Avenir"}}
          >
            {event.event}
          </Typography>
          <Typography
            variant="subtitle1"
            color="#000000"
            component="div"
            sx={{ fontWeight: "bold", fontFamily: "montserrat",
            
          }}
          >
            {event.date}
          </Typography>
        </CardContent>
        
      </Box>
        <Box sx={{ display: "flex",
        pb:2,
        pr:2,
        
        
        alignItems: "flex-end",justifyContent:'flex-end'}}>
          <Button
          onClick={()=>handleDeleteEvent(event)}
            style={{
              width: "80px",
           
              
              backgroundColor: "#E3E3E3",
              color: "#111111",
              textTransform: "capitalize",
            }}
          >
            Cancel
          </Button>
        </Box>
    </Card>
  );
};

export default EventCard;
