import React from "react";
import "./style.css";

function UserTextInput(props) {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="Add to Image">Add to Image</span>
      </div>
      <textarea className="form-control" aria-label="Add to Image"></textarea>
    </div>
    // creates on click the object {text: "SOMETHING FUNNY", maxWidth: 1000, maxHeight: 100, placementX: -150, placementY: 550}
  );
}

export default UserTextInput;
