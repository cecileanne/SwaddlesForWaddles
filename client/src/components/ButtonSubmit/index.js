import React from "react";

export function AddTextBtn(props) {
  return (
    <button type="submit" {...props}>
      {props.children}
    </button>
  );
}

export function SaveBtn() {
  return <button>Save</button>;
}
export function SubmitBtn() {
  return <button>Submit</button>;
}
function handleClick(e) {
  e.preventDefault();
  let amount = document.getElementsByName("Donation")[0].value;
  if (!isNaN(amount)) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/donation", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({ amount: amount }));
  }
}

export function DonateBtn() {
  return (
    <a className="button" href="/donate" role="button" onClick={handleClick}>
      Donate Now!
    </a>
  );
}

export function DownloadBtn({ process, dataName }) {
  return (
    <a class="btn" href={process} download="penguin_meme.jpg" role="button">
      Download
    </a>
  );
}
