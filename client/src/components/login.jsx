import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Row,
  Col,
  Container,
  Alert
} from "reactstrap";

const useForm = () => {
  const [form, setValue] = useState({
    username: "",
    password: ""
  });
  const handleChange = e => {
    setValue({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const resetFields = () => {
    setValue({
      ...form,
      username: "",
      password: ""
    });
  };

  return [form, handleChange, resetFields];
};

const LoginComponent = () => {
  const [form, handleChange, resetFields] = useForm();
  const handleSubmit = e => {
    e.preventDefault();
    if (!form.username || !form.password) {
      alert("Must provide email/username and password to login");
      return;
    }
    //login(form);
    resetFields();
  };
  return <h1>This is LoginComponent</h1>;
};

export default LoginComponent;
