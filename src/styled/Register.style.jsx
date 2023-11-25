import { Box, Button, TextField, styled } from "@mui/material";
export const RegisterForm = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 480,
  border: "2px solid #ABABAB",
  backgroundColor: "#FFFFFF",
  borderRadius: "4px",
  margin: "0 auto",
  marginTop: 10,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  padding: theme.spacing(6),
}));

export const CustomButton =styled(Button)(({theme})=>({
    backgroundColor:'#3F90FC',
    color:'#FFFFFF',
    textTransform: 'capitalize',
    '&:hover': {
        backgroundColor:'#3F50F9',
        
        color:'#FFFFFF' // Change the background color on hover
        // Add more hover styles if needed
      },
}))



export const CustomTextField = styled(TextField)(({ theme }) => ({
  padding: "0",
  marginBottom:'1rem',

  "& .MuiInputBase-input::placeholder": {
    color: "#000000",
  },
  "& .MuiOutlinedInput-input::placeholder": {
    color: "#000000",
  },
  "& .MuiInputBase-root": {
    padding: "0",
    color: "#000000",

    "& .MuiInputBase-input": {
      padding: "0",
      color: "#000000",
    },
  },

  "&. .MuiOutlinedInput-root": {
    "& fieldset": {
      borderBottom: "1px solid black",
      
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "0",
    borderBottom: "2px solid #C5C5C5",
  },
}));




