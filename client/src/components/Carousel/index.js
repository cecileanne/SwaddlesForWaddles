import React from "react";
import { Container } from "../../components/Grid";
import InfiniteCarousel from "react-leaf-carousel";
import "./style.css";
import imageTypes from "./images.json";

function Carousel(props) {
  const [state, setState] = React.useState({
    imageTypes
  });

  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]}
      dots={true}
      showSides={true}
      sidesOpacity={0.5}
      sideSize={0.1}
      slidesToScroll={4}
      slidesToShow={4}
      scrollOnDevice={true}
    >
      {state.imageTypes.map(image => (
        <div>
          <img
            // onClick={alert(image.dataName)}
            data-state={image.clicked}
            data-type={image.type}
            alt={image.dataName}
            src={process.env.PUBLIC_URL + image.imgURL}
          />
        </div>
      ))}
    </InfiniteCarousel>
  );
}

export default Carousel;
