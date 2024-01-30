import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import cookie from "cookie";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="relative" style={{ backgroundColor: "#00b36b" }}>
      <Toolbar>
        <Typography
          variant="h6"
          style={{ flexGrow: "1", textDecoration: "None" }}
        >
          <Link to="/dashboard">Dashboard</Link>
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/Register">Register</Link>
          </li>

          {document.cookie.includes("loggedIn=true") ? (
            <li className="nav-list-item">
              <Link to="/Budget">Budget</Link>
            </li>
          ) : null}

          <li
            className="nav-list-item"
            onClick={() => {
              document.cookie = cookie.serialize("loggedIn", null, {
                maxAge: 0,
              });
              navigate("/login");
            }}
          >
            {document.cookie === "" ? <Link to="/login">Login</Link> : "Logout"}
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
