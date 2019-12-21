import React from "react";
import "./style.css";

export function AddTextBtn() {
  return <button>Add Text</button>;
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

export function DonateBtn() {
  return (
    <a className="btn btn-primary" href="/donate" role="button">
      Donate Now!
    </a>
  );
}
export function AboutBtn() {
  return (
    <a className="btn btn-primary" href="/about" role="button">
      About
    </a>
  );
}
export function SwaddleBtn() {
  return (
    <a className="btn btn-primary" href="/swaddle" role="button">
      Swaddle a Penguin!
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
