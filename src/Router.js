import React from "react";
import { Routes, Route } from "react-router";
import LogIn from "./containers/login";
import { Link } from "react-router-dom";
import cookie from "cookie";

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
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  );
};

export default Router;
