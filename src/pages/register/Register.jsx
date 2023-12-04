import { Box, Container, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import group from "../../assets/logos/Group 1329.png";
import { useAuth } from "../../hooks/useAuth";
import {
  CustomButton,
  CustomTextField,
  RegisterForm,
} from "../../styled/Register.style";

const Register = () => {
  const { createUser, updateUser } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleRegister = async ({
    name,
    email,
    password,
    registrationDate,
    description,
  }) => {
    console.log(name, email, password, description);

    await createUser(email, password).then((result) => {
      updateUser(name).then(() => {
        const saveUser = { name, email, registrationDate, description };
        axios.post("http://localhost:5000/users", saveUser).then((data) => {
          console.log(data.data);
          if (data.data.insertedId) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User created successfully.",
              showConfirmButton: false,
              timer: 1500,
            });

            navigate("/");
          }
          Swal.fire(data.data.message);
        });
      });
    });

    reset();
  };

  return (
    <Box sx={{ backgroundColor: "#E5E5E5", padding: "20px",width:'100%',height:'100%' }}>
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" ,width:'100%'}}
      >
        <img
          style={{ width: "200px", alignItems: "center" }}
          src={group}
          alt=""
          srcset=""
        />
        <RegisterForm maxWidth='500px' sx={{width:'100%'}} component="form" onSubmit={handleSubmit(handleRegister)}>
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
            {...register("registrationDate", { required: true })}
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
