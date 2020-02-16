import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { uploadFile } from "../store/actions/uploadActions";

const Upload = props => {
  const [file, setFile] = useState(null);
  const fileChangeHandler = e => {
    setFile(e.target.files[0]);
  };
  const submitHandler = e => {
    e.preventDefault();

    if (file) {
      if (file.type !== "text/html") {
        alert("Can only upload html file");
        return;
      }
      const formData = new FormData();
      formData.append("html", file);
      setFile(null);
      document.getElementById("FileUpload").value = "";
      props.upload(formData);
    }
    return;
  };
  return (
    <div>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input
            onChange={fileChangeHandler}
            type="file"
            name="file"
            id="FileUpload"
          />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};
const mapDispatch = dispatch => ({
  upload: file => dispatch(uploadFile(file))
});

export default connect(
  null,
  mapDispatch
)(Upload);
