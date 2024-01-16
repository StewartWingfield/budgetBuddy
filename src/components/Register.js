import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import cookie from "cookie";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const registerInput = {
      ...state,
    };
    registerInput[e.target.name] = e.target.value;
    setState(registerInput);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4001/auth/signup", {
        username: state.username,
        email: state.email,
        password: state.password,
      })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(state);
  return (
    <div className="App">
      <Container maxWidth="sm">
        <form
          className="login-form"
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleRegister}
        >
          <TextField
            required
            variant="standard"
            onChange={handleTextChange}
            value={state.username}
            name="username"
            label="Username"
            type="text"
          />
          <TextField
            required
            variant="standard"
            onChange={handleTextChange}
            value={state.email}
            name="email"
            label="Email"
            type="text"
          />
          <TextField
            required
            variant="standard"
            onChange={handleTextChange}
            value={state.password}
            name="password"
            label="Password"
            type="password"
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
            sx={{ marginTop: "20px" }}
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Register;
