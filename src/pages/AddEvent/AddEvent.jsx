import CloudUploadOutlined from "@mui/icons-material/CloudUploadOutlined";
import { Box, Button, InputBase, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { VisuallyHiddenInput } from "../../styled/Button.styled";
import { CustomButton } from "../../styled/Register.style";

const AddEvent = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,

    formState: { errors },
  } = useForm();

  const handleAddEvent = () => {};

  return (
    <Box sx={{flexDirection: "column",
    display: "flex",}} >
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          padding: 10,
          marginLeft: 2,

          borderRadius: 8,
          flexDirection: "column",
          display: "flex",
          
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 4,
          }}
          component="form"
          onSubmit={handleSubmit(handleAddEvent)}
        >
          <Box sx={{ padding: 1 }}>
            <Typography sx={{ fontWeight: "bold", marginBottom: 1 }}>
              Event Title
            </Typography>
            <InputBase
            placeholder="Enter Event"
              sx={{ border: "1px solid #C9C9C9", width: 450 }}
              
              {...register("event", { required: true })}
            ></InputBase>
          </Box>
          <Box sx={{ padding: 1 }}>
            <Typography sx={{ fontWeight: "bold", marginBottom: 1 }}>
              Event Date
            </Typography>
            <InputBase
              sx={{ border: "1px solid #C9C9C9", width: 450 }}
              type="date"
              {...register("date", { required: true })}
            ></InputBase>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 4,
          }}
        >
          <Box sx={{ padding: 1 }}>
            <Typography sx={{ fontWeight: "bold", marginBottom: 1 }}>
              Description
            </Typography>
            <InputBase
              placeholder="Enter Designation"
              sx={{ border: "1px solid #C9C9C9", width: 450, height: 100 }}
              {...register("description", { required: true })}
            ></InputBase>
          </Box>
          <Box sx={{ padding: 2 }}>
            <Typography sx={{ fontWeight: "bold", marginBottom: 1 }}>
              Banner
            </Typography>

            <Button
              style={{
                backgroundColor: "#E5F3FF",
                color: "#0084FF",
                border: "1px solid #0084FF",
              }}
              component="label"
              variant="contained"
              startIcon={<CloudUploadOutlined />}
            >
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{alignSelf: 'flex-end', marginTop: 2,marginRight:2}}>
      <CustomButton 
      style={{padding:6,width:106}}
      type="submit">Submit</CustomButton>
      </Box>
    </Box>
  );
};

export default AddEvent;
