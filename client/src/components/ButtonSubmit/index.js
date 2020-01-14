import React from "react";
import "./style.css";

export function AddTextBtn(props) {
  return (
    <button type="submit" {...props}>
      {props.children}
    </button>
  );
}

export function DonateBtn() {
  return (
    <a href="/donate" role="button">
      Donate Now!
    </a>
  );
}

export function DownloadBtn({ process, dataName }) {
  return (
    <button>
      <a
        class="btn btn-primary"
        href={process}
        download="penguin_meme.jpg"
        role="button"
      >
        Download
      </a>
    </button>
  );
}
