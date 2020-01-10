import React from "react";

function ImageSelector(props) {
  // <div key={{ index }}>
  return (
    <div>
      <img
        onClick={() => {
          console.log("it got clicked");
          alert(props.dataName);
        }}
        data-state={props["data-state"]}
        data-type={props["data-type"]}
        alt={props.alt}
        src={props.src}
      />
    </div>
  );
}

export default ImageSelector;
