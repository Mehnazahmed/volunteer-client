import CloudUploadOutlined from "@mui/icons-material/CloudUploadOutlined";
import { Box, Button, InputBase, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { VisuallyHiddenInput } from "../../styled/Button.styled";
import { CustomButton } from "../../styled/Register.style";
import theme from "../../theme/theme";

const AddEvent = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,

    formState: { errors },
  } = useForm();

  const handleAddEvent = (data) => {
    console.log(data);
  };

  return (
    <Box
      onSubmit={handleSubmit(handleAddEvent)}
      component="form"
      
      sx={{
        flexDirection: "column",
        display: "flex",
        mx: "auto",
        width:'100%',
        maxWidth: "1020vw",
      }}
    >
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          padding: 4,
          marginLeft: 2,

          borderRadius: 4,
          flexDirection: "column",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: {xs:0,md:3},
            width:'100%'
          }}
        >
          <Box sx={{ padding: 1,width:'100%' }}>
            <Typography
              sx={{ fontWeight: "bold", 
              fontSize: { xs: "1.1rem", md: "1rem" },
              marginBottom: theme.breakpoints.down("xs") ? 1 : 0 }}
            >
              Event Title
            </Typography>
            <InputBase
              placeholder="Enter Event"
              sx={{ border: "1px solid #C9C9C9",
              width:'100%', 
              maxWidth: '450px',
              [theme.breakpoints.down("xs")]: {
                maxWidth: "250px"},
            }}
              {...register("event", { required: true })}
            ></InputBase>
          </Box>
          <Box sx={{ padding: 1,width:'100%'}}>
            <Typography
              sx={{ fontWeight: "bold",
              fontSize: { xs: "1.1rem", md: "1rem" }, 
              marginBottom: theme.breakpoints.down("xs") ? 1 : 0 }}
            >
              Event Date
            </Typography>
            <InputBase
              sx={{ border: "1px solid #C9C9C9", 
              width:'100%', 
              maxWidth: '450px' ,
              [theme.breakpoints.down("xs")]: {
                maxWidth: "250px"},
            }}
              type="date"
              {...register("date", { required: true })}
            ></InputBase>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",

            flexDirection: { xs: "column", md: "row" },
            gap: {xs:0,md:3},
          }}
        >
          <Box sx={{ padding: 1,width:'100%' }}>
            <Typography
              sx={{ fontWeight: "bold", 
              fontSize: { xs: "1.1rem", md: "1rem" },
              marginBottom: theme.breakpoints.down("xs") ? 1 : 0 }}
            >
              Description
            </Typography>
            <InputBase
            
              placeholder="Enter Description"
              sx={{ border: "1px solid #C9C9C9", 
             
              width:'100%', 
              maxWidth: '450px' ,
              [theme.breakpoints.down("xs")]: {
                maxWidth: "250px"},
              height: { xs: '80px', md: '100px' }, }}
              {...register("description", { required: true })}
            ></InputBase>
          </Box>
          <Box sx={{ padding: 1,width:'100%' }}>
            <Typography
              sx={{ fontWeight: "bold", 
              fontSize: { xs: "1.1rem", md: "1rem" },
              marginBottom: theme.breakpoints.down("xs") ? 1 : 0 }}
            >
              Banner
            </Typography>

            <Button
              style={{
                backgroundColor: "#E5F3FF",
                color: "#0084FF",
                border: "1px solid #0084FF",
                textTransform: "capitalize", // Capitalize the text
                transition: "background-color 0.3s, color 0.3s",
                "&:hover": {
                  backgroundColor: "#0084FF",
                  color: "#FFFFFF",
                },
                width: "100%", 
                maxWidth: "150px",
              }}
              component="label"
              variant="contained"
              startIcon={<CloudUploadOutlined />}
            >
              Upload Image
              <VisuallyHiddenInput type="file" />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ alignSelf: "flex-end", marginTop: 2 }}>
        <CustomButton style={{ padding: 6, width: 106 }} type="submit">
          Submit
        </CustomButton>
      </Box>
    </Box>
  );
};

export default AddEvent;
