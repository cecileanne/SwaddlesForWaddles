import React from "react";
import "./style.css";

export function AddTextBtn(props) {
  return (
    <button type="submit" {...props}>
      {props.children}
    </button>
  );
}

export function ResetBtn() {
  return <button type="reset">Reset</button>;
}

export function SaveBtn() {
  return <button>Save</button>;
}
export function SubmitBtn() {
  return <button>Submit</button>;
}
// export function RouteBtn() {
//   if ((<Link to="/About" />)) {
//     return <button>About</button>;
//   } else if ((<Link to="/Swaddle" />)) {
//     return <button>Swaddle</button>;
//   }
//   if ((<Link to="/Donate" />)) {
//     return <button></button>;
//   }
// }
export function DonateBtn() {
  return (
    <a className="btn btn-primary" href="/donate" role="button">
      Donate Now!
    </a>
  );
}

export function DownloadBtn() {
  return <button>Download</button>;
}

export function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}
