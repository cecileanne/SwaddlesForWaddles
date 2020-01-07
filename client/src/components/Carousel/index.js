import React from "react";

import "./style.css";

function ImageDisplay({ imgURL, dataName, dataType, handleClick }) {
  // console.log(dataAttr);
  return (
    <div className="col-md-12">
      <img src={imgURL} alt={dataType} id={dataName} onClick={handleClick} />
    </div>
  );
}

export default ImageDisplay;
