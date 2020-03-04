import React from "react";
import TextField from "@material-ui/core/TextField";

export function Input(props) {
  return (
    <div className="form-group">
      <TextField
        className="form-control"
        name={props.name}
        value={props.value}
        onChange={props.changeHandler}
        placeholder={props.placeholder}
        type={props.type}
      />
    </div>
  );
}
//MAY NOT NEED
export function FormSubmit(props) {
  return (
    <button
      {...props}
      style={{ float: "right", marginBottom: 10 }}
      className="btn btn-success"
    >
      {props.children}
    </button>
  );
}
