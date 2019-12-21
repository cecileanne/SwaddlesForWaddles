import React from "react";
import "./style.css";
import { DeleteBtn, DownloadBtn } from "../../components/ButtonSubmit";

function GalleryImage() {
  return (
    <section>
      <div className="card">
        <DeleteBtn />
        <img
          className="card-img-top"
          src={
            process.env.PUBLIC_URL + "/assets/images/penguins/penguinTest1.jpg"
          }
          alt="Card image cap"
        />
      </div>
      <DownloadBtn />
    </section>
  );
}

export default GalleryImage;
