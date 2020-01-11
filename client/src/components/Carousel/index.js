import React from "react";

import "./style.css";

function ImageDisplay({ imgURL, dataName, dataType, handleClick }) {
  // console.log(dataAttr);
  return (
    <div className="col-md-12">
      <img
        className="clickalbeIMG"
        id={imgURL}
        src={imgURL}
        alt={dataName}
        dataName={dataName}
        dataType={dataType}
        onClick={handleClick}
      />
    </div>
  );
}

export default ImageDisplay;
