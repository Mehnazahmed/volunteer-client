import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";

const WorkCard = ({ workData }) => {
  return (
    <Card sx={{ maxWidth: "220px", width: "100%" }}>
      <CardMedia
        component="img"
        sx={{
          border:0,
          borderRadius:0,
          width: "100%",
        }}
        image={workData.img}
        alt={workData.name}
      />
      <Box
        sx={{ backgroundColor: workData.label,  padding: "15px", width: "100%" ,height:'100%'}}
      >
        <Typography
          sx={{ textAlign: "center", width: "100%" }}
          gutterBottom
          variant="body1"
          component="div"
        >
          {workData.name}
        </Typography>
      </Box>
    </Card>
  );
};

export default WorkCard;
