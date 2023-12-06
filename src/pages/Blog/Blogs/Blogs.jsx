import { Box } from '@mui/material';
import React from 'react';
import useBlogs from '../../../hooks/useBlogs';
import BlogCard from '../BlogCard/BlogCard';



const Blogs = () => {
    const {blogs} =useBlogs();
    return (
        <Box  sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            justifyItems: "center",
            gap:4,
            padding:10,
            width:"100%"}}>
            {
                blogs.map((blog)=><BlogCard
                key={blog._id}
                blog={blog}
                ></BlogCard>)
            }
            
        </Box>
    );
};

export default Blogs;