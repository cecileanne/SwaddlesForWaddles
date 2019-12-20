import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function ButtonIcon(props) {
  return (
    <button {...props} type="submit">
      ✗
    </button>
  );
}
