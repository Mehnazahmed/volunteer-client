import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import group from '../../assets/logos/Group 1329.png';
import { CustomButton, CustomTextField, RegisterForm } from '../../styled/Register.style';

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    return (
        <Box sx={{backgroundColor:'#E5E5E5',
        padding:'120px'}}>
           <Container sx={{display:'flex',flexDirection:'column',alignItems: 'center'}}>
            <img style={{width:'200px',alignItems:'center'}} src={group} alt="" srcset="" />
            <RegisterForm component='form'>
               <Typography fontWeight={800} marginBottom='1rem'>Register as a Volunteer</Typography>
               <CustomTextField 
             
               placeholder='Name'
               {...register('name',{required:true})}
               ></CustomTextField>
               <CustomTextField 
               placeholder='Email'
               {...register('email',{required:true})}
               ></CustomTextField>
               <CustomTextField 
               placeholder='Date'
               {...register('date',{required:true})}
               ></CustomTextField>
               <CustomTextField 
               placeholder='Description'
               {...register('description',{required:true})}
               ></CustomTextField>
               <CustomButton  type='submit'>Registration</CustomButton>

            </RegisterForm>


           </Container>
            
        </Box>
    );
};

export default Register;