import React from "react";
// import data from "dataImageTypes.json";
import "./style.css";

export function ShowPenguin() {
  return (
    // <button onClick={props.handleCarouselChange}>
    <button>
      <img
        src={
          process.env.PUBLIC_URL +
          "/assets/images/icons/penguin-svgrepo-com.svg"
        }
      />
    </button>
  );
}

export function ShowSweater() {
  return (
    // <button onClick={props.handleCarouselChange}>
    <button>
      <img
        src={
          process.env.PUBLIC_URL +
          "/assets/images/icons/pullover-sweater-svgrepo-com.svg"
        }
      />
    </button>
  );
}
