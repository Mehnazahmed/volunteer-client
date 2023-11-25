import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import group from "../../assets/logos/Group 1329.png";
import { useAuth } from "../../hooks/useAuth";
import {
    CustomButton,
    CustomTextField,
    RegisterForm,
} from "../../styled/Register.style";

const Register = () => {
  const { registerWithEmailAndPassword } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleRegister = async ({ name, email, password }) => {
    console.log(name, email, password);
    await registerWithEmailAndPassword(name, email, password, navigate);
    reset();
  };

  return (
    <Box sx={{ backgroundColor: "#E5E5E5", padding: "120px" }}>
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img
          style={{ width: "200px", alignItems: "center" }}
          src={group}
          alt=""
          srcset=""
        />
        <RegisterForm component="form" onSubmit={handleSubmit(handleRegister)}>
          <Typography fontWeight={800} marginBottom="1rem">
            Register as a Volunteer
          </Typography>
          <CustomTextField
            placeholder="Name"
            {...register("name", { required: true })}
          ></CustomTextField>
          <CustomTextField
            placeholder="Email"
            {...register("email", { required: true })}
          ></CustomTextField>
          <CustomTextField
            type="date"
            placeholder="Date"
            {...register("date", { required: true })}
          ></CustomTextField>
          <CustomTextField
            placeholder="Password"
            {...register("password", { required: true })}
          ></CustomTextField>
          <CustomTextField
            placeholder="Description"
            {...register("description", { required: true })}
          ></CustomTextField>
          <Link to="/login">Already have an account?</Link>
          <CustomButton type="submit">Registration</CustomButton>
        </RegisterForm>
      </Container>
    </Box>
  );
};

export default Register;
