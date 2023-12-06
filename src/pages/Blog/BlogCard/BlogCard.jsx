import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import * as React from "react";
import { useAuth } from "../../../hooks/useAuth";

const BlogCard = (blog) => {
  const {user}=useAuth();
  console.log(blog.blog)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {user && user.photoURL ? (
              <img src={user.photoURL} alt="user avatar" />
            ) : blog ? (
              blog.blog.name.charAt(0).toUpperCase()
            ) : null}
          </Avatar>
        }
        title={blog.blog.name}
        
        subheader={blog.blog.date}
      />
      <CardMedia
        component="img"
        height="194"
        image={blog.blog.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {blog.blog.blog}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
