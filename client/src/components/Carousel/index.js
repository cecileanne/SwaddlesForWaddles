import React from "react";

import "./style.css";
import imageTypes from "./images.json";

function ImageDisplay({ imgURL, dataName, dataType, clicked, handleClick }) {
  return (
    <div className="col-md-12">
      <img
        id={imgURL}
        src={imgURL}
        alt={dataName}
        dataName={dataName}
        dataType={dataType}
        onClick={handleClick}
        // clicked={clicked}
      />
    </div>
  );
}
// {state.imageTypes.map(image => (
//   return (

//         key={image.index}
//         data-state={image.clicked}
//         data-type={image.type}
//         alt={image.dataName}
//         src={process.env.PUBLIC_URL + image.imgURL}
//         />
//         );
//         ))}
//       }

export default ImageDisplay;
