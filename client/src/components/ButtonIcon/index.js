import React from "react";
import "./style.css";

export function ShowPenguin() {
  return (
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
