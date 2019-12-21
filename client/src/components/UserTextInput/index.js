import React from "react";
import { AddTextBtn } from "../ButtonSubmit";
import "./style.css";

function UserTextInput(props) {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="Add to Image">Add to Image</span>
      </div>
      <textarea className="form-control" aria-label="Add to Image"></textarea>
      <AddTextBtn />
    </div>
  );
}

export default UserTextInput;
