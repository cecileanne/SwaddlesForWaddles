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
        value={props.userText}
        onChange={props.handleChange}

        // TO DO LIMIT TO 35 CHAR
      ></textarea>
      {/* <AddTextBtn onClick={this.handleText} /> */}
    </div>
    // creates on click the object {text: "SOMETHING FUNNY", maxWidth: 1000, maxHeight: 100, placementX: -150, placementY: 550}
  );
}

export default UserTextInput;
