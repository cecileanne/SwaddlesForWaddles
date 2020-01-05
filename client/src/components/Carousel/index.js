import React from "react";
import { Container } from "../../components/Grid";
// import InfiniteCarousel from "react-leaf-carousel";
import "./style.css";
import imageTypes from "./images.json";
// import ImageSelector from "../../components/ImageSelector";

// function Carousel(props) {
//   const [state, setState] = React.useState({
//     imageTypes
//   });
// }

function ImageDisplay({ imgURL, dataName, dataType, clicked, handleClick }) {
  return (
    <div className="col-md-4">
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
