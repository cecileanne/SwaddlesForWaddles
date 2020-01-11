import React from "react";
// import { AddTextBtn } from "../ButtonSubmit";
import API from "../../utils/API";

import "./style.css";

function UserTextInput(props) {
  // const state = {};
  // const handleText = event => {};
  return (
    <div className="form-group">
      <label for="textInput">Add Text</label>

      <textarea
        className="form-control"
        placeholder="Say something funny!"
        aria-label="Add to Image"
        maxLength="35"
        value={props.userTextGrabbed}
        onChange={props.handleChange}
      ></textarea>
      {/* <AddTextBtn onClick={this.handleText} /> */}
    </div>
  );
}

export default UserTextInput;
