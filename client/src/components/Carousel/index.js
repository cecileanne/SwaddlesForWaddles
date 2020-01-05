import React from "react";
// import { Container } from "../../components/Grid";
// import InfiniteCarousel from "react-leaf-carousel";
import "./style.css";
// import imageTypes from "./images.json";
// import ImageSelector from "../../components/ImageSelector";

// function Carousel(props) {
//   const [state, setState] = React.useState({
//     imageTypes
//   });
// }

function ImageDisplay({ imgURL, dataName, dataType, handleClick }) {
  // console.log(dataAttr);
  return (
    <div className="col-md-4">
      <img src={imgURL} alt={dataName} id={imgURL} onClick={handleClick} />
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
