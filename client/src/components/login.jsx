import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

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
    console.log(form.username, form.password);
    //login(form);
    resetFields();
  };
  return (
    <div style={{ width: "60%", margin: "2rem auto" }}>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Username</Label>
          <Input
            type="email"
            name="username"
            id="username"
            placeholder="email"
            value={form.username}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
            value={form.password}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default LoginComponent;
