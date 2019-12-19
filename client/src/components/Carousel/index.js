import React from "react";
import "./style.css";

function Carousel(props) {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="Add to Image">Add to Image</span>
      </div>
      <textarea className="form-control" aria-label="Add to Image"></textarea>
    </div>
  );
}

export default Carousel;
