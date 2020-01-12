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

// export function SaveBtn() {
//   return <button>Save</button>;
// }
// export function SubmitBtn() {
//   return <button>Submit</button>;
// }

export function DonateBtn() {
  return (
    <a className="btn btn-primary" href="/donate" role="button">
      Donate Now!
    </a>
  );
}

export function DownloadBtn({ imgURL, dataName }) {
  return (
    <a
      class="btn btn-primary"
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
  );
}

// export function DeleteBtn(props) {
//   return (
//     <span className="delete-btn" {...props} role="button" tabIndex="0">
//       ✗
//     </span>
//   );
// }
