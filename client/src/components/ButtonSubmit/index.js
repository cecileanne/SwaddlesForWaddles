import React from "react";
import "./style.css";

export function AddTextBtn(props) {
  return (
    <button type="submit" {...props}>
      {props.children}
    </button>
  );
}

// export function SaveBtn() {
//   return <button>Save</button>;
// }
// export function SubmitBtn() {
//   return <button>Submit</button>;
// }

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
      {/* <a
        href={"/assets/images/penguins/penguinTest1.jpg"} //this is the prop {imgURL} from jimp/database
        download="PenguinTest1" //this is the prop {dataName}
        role="button"
      > */}
      <a
        class="btn btn-primary"
        href={process}
        download="penguin_meme.jpg" //this is the prop {dataName}
        role="button"
      >
        Download
      </a>
    </button>
  );
}

// export function DeleteBtn(props) {
//   return (
//     <span className="delete-btn" {...props} role="button" tabIndex="0">
//       ✗
//     </span>
//   );
// }
