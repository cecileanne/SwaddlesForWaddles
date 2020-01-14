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

export function DownloadBtn({ imgURL, dataName }) {
  return (
    <button>
      <a
        href={"/assets/images/penguins/penguinTest1.jpg"} //this is the prop {imgURL} from jimp/database
        download="PenguinTest1" //this is the prop {dataName}
        role="button"
      >
        {/* <a
      class="btn btn-primary"
      href=atob({prop.base64})//this is the prop {imgURL} from jimp/database
      download={dataName} //this is the prop {dataName}
      role="button"
    > */}
        Download
      </a>
    </button>
  );
}
