import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from "react";

const WorkCard = ({workData}) => {
    
    
  return (
    <Card sx={{ maxWidth: 190 ,height:'100%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px",borderBottomLeftRadius:'0px' }}
          
          
          image={workData.img}
          alt={workData.name}
        />
        <CardContent sx={{backgroundColor:workData.label,  padding:'15px'}}>
          <Typography sx={{textAlign: 'center'}}   gutterBottom variant="body1" component="div">
            {workData.name}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default WorkCard;
