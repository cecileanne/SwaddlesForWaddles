import React from "react";
// import { Container } from "../../components/Grid";
import InfiniteCarousel from "react-leaf-carousel";

const Carousel = () => {
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
      <div>
        <img
          data-name=""
          alt=""
          src={
            process.env.PUBLIC_URL + "/assets/images/penguins/penguinTest1.jpg"
          }
        />
      </div>
      <div>
        <img
          data-name=""
          alt=""
          src={
            process.env.PUBLIC_URL +
            "/assets/images/sweaters/blueSweaterTest.png"
          }
        />
      </div>

      <div>
        <img
          data-name=""
          alt=""
          src={
            process.env.PUBLIC_URL + "/assets/images/penguins/penguinTest1.jpg"
          }
        />
      </div>
      <div>
        <img
          data-name=""
          alt=""
          src={
            process.env.PUBLIC_URL +
            "/assets/images/sweaters/blueSweaterTest.png"
          }
        />
      </div>

      <div>
        <img
          data-name=""
          alt=""
          src={
            process.env.PUBLIC_URL + "/assets/images/penguins/penguinTest1.jpg"
          }
        />
      </div>
      <div>
        <img
          data-name=""
          alt=""
          src={
            process.env.PUBLIC_URL +
            "/assets/images/sweaters/blueSweaterTest.png"
          }
        />
      </div>
      <div>
        <img
          data-name=""
          alt=""
          src={
            process.env.PUBLIC_URL +
            "/assets/images/sweaters/redSweaterTest.png"
          }
        />
      </div>
    </InfiniteCarousel>
  );
};

export default Carousel;
