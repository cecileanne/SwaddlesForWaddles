import React from "react";

import "./style.css";

function ImageDisplay({ imgURL, dataname, datatype, handleClick }) {
  // console.log(dataAttr);
  return (
    <div className="col-md-12">
      <img
        className="clickalbeIMG"
        id={imgURL}
        src={imgURL}
        alt={dataname}
        dataname={dataname}
        datatype={datatype}
        onClick={handleClick}
      />
    </div>
  );
}

export default ImageDisplay;
