import React from "react";
import RegisterComponent from "../components/register";
import LoginComponent from "../components/login";

const AuthPage = () => {
  return (
    <>
      <h1>This is Auth page</h1>
      <LoginComponent />
      <RegisterComponent />
    </>
  );
};

export default AuthPage;
