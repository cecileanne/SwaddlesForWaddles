import React from "react";

import "./style.css";

function UserTextInput(props) {
  return (
    <div className="form-group">
      <label htmlFor="textInput">Add Text</label>

      <textarea
        className="form-control"
        placeholder="Say something funny!"
        aria-label="Add to Image"
        maxLength="35"
        value={props.userTextGrabbed}
        onChange={props.handleChange}
      ></textarea>
    </div>
  );
}

export default UserTextInput;
