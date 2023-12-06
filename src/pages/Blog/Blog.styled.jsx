import { Box, Button, styled } from "@mui/material";


export const BlogForm = styled(Box)(({ theme }) => ({
    width: "100%",
    maxWidth: 480,
    border: "1px solid #ABABAB",
    backgroundColor: "#FFFFFF",
    borderRadius: "4px",
    margin: "0 auto",
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    padding: theme.spacing(6),
  }));

  export const BlogButton =styled(Button)(({theme})=>({
    width:'40%',
    
      backgroundColor:'#3F90FC',
      color:'#FFFFFF',
      textTransform: 'capitalize',
      '&:hover': {
          backgroundColor:'#3F50F9',
          
          color:'#FFFFFF' // Change the background color on hover
          // Add more hover styles if needed
        },
  }))
  