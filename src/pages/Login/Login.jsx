import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import group from '../../assets/logos/Group 1329.png';
import { useAuth } from '../../hooks/useAuth';
import { CustomButton, CustomTextField, RegisterForm } from '../../styled/Register.style';
const Login = () => {
    const {loginWithEmailAndPassword }= useAuth();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm();

      const navigate =useNavigate();
      const location =useLocation();

      const handleLogIn =async({email,password})=>{
        console.log(email,password);
        await loginWithEmailAndPassword(email,password,navigate,location);
        location?.state?.from ? navigate(location.state.from.pathname)
        : navigate("/");
        reset();
         
      };
    return (
        <Box sx={{backgroundColor:'#E5E5E5',
        padding:'120px'}}>
           <Container sx={{display:'flex',flexDirection:'column',alignItems: 'center'}}>
            <img style={{width:'200px',alignItems:'center'}} src={group} alt="" srcset="" />
            <RegisterForm component='form'
            onSubmit={handleSubmit(handleLogIn)}
            >
               <Typography fontWeight={800} marginBottom='1rem'>Log in</Typography>
               
               <CustomTextField 
               placeholder='Email'
               {...register('email',{required:true})}
               ></CustomTextField>
               
               <CustomTextField 
               placeholder='Password'
               {...register('password',{required:true})}
               ></CustomTextField>
              
               <CustomButton  type='submit'>Log in</CustomButton>

            </RegisterForm>


           </Container>
            
        </Box>
    );
};

export default Login;