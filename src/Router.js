import React from "react";
import { Routes, Route } from "react-router";
import Login from "./components/Login";
import { Link } from "react-router-dom";
import cookie from "cookie";
import Register from "./components/Register";
import Navigation from "./components/Navigation";
import Budget from "./components/Budget";
import Dashboard from "./components/Dashboard";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;

  return checkAuth() === true ? <Component {...rest} /> : <Link to="/login" />;
};

const Router = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
    </>
  );
};

export default Router;
