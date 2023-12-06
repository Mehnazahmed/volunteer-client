import { CloudUploadOutlined } from "@mui/icons-material";
import { Box, Button, Container, InputBase, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { useAuth } from "../../../hooks/useAuth";

import useAxiosSecure from "../../../hooks/useAxiosSecure";

import { VisuallyHiddenInput } from "../../../styled/Button.styled";

import { useEffect, useState } from "react";
import theme from "../../../theme/theme";
import { BlogButton, BlogForm } from "../Blog.styled";

const imageHostKey = import.meta.env.VITE_img_uploadkey;

const AddBlog = () => {
  const { user } = useAuth();
  
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    
    const formattedDate = () => {
      const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      };
      const date = new Date();
      const day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(date);
      const suffix = (day) => {
        if (day >= 11 && day <= 13) {
          return 'th';
        }
        const lastDigit = day % 10;
        switch (lastDigit) {
          case 1:
            return 'st';
          case 2:
            return 'nd';
          case 3:
            return 'rd';
          default:
            return 'th';
        }
      };
      return `${day}${suffix(day)} ${new Intl.DateTimeFormat('en', { month: 'long' }).format(date)}, ${new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)}`;
    };
  
    const currentDate = formattedDate();
    setCurrentDate(currentDate);
 
  }, []);
  
 



  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
  console.log("Request URL:", url);

  const handleAddBlog = (data) => {
   
    const image = data.image[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    axios
      .post(url, formData)
      .then((imgdata) => {
        console.log(imgdata.data);
        if (imgdata.data.success) {
          const imgUrl = imgdata.data.data.url;
          console.log(imgUrl);
          ////upload image//
          const { blog } = data;

          const newBlog = {
            name: user.displayName,
            email: user.email,
            blog,
            image: imgUrl,
            date:currentDate
          };
          console.log(newBlog)
          axiosSecure.post("/blogs", newBlog).then((data) => {
            console.log("posting new Blog", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top",
                icon: "success",
                title: `Successfully Added!`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <Box sx={{ backgroundColor: "#E5E5E5", width: "100%", height: "100%",padding:4 }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <BlogForm
          maxWidth="500px"
          sx={{ width: "100%" }}
          component="form"
          onSubmit={handleSubmit(handleAddBlog)}
        >
          <Typography fontWeight={800}>Post A Blog</Typography>
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
            <VisuallyHiddenInput
              {...register("image", { required: true })}
              type="file"
            />
          </Button>

          <InputBase
          multiline
          rows={4}
            placeholder="Write Blog"
            sx={{
              border: "1px solid #C9C9C9",

              width: "100%",
              maxWidth: "450px",
              [theme.breakpoints.down("xs")]: {
                maxWidth: "250px",
              },
              height: { xs: "100px", md: "120px" },
            }}
            {...register("blog", { required: true })}
          ></InputBase>

          <BlogButton type="submit">Upload</BlogButton>
        </BlogForm>
      </Container>
    </Box>
  );
};

export default AddBlog;
