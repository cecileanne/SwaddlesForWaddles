import React from "react";
import "./style.css";
import { DeleteBtn, DownloadBtn } from "../../components/ButtonSubmit";

function GalleryImage() {
  return (
    <>
      <section>
        <div className="card">
          <DeleteBtn /> {/*needs props i think*/}
          <img
            className="card-img-top"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/penguins/penguinTest1.jpg" //from Gallery table
            }
            alt="Card image cap"
          />
        </div>
      </section>
      <DownloadBtn />
    </>
  );
}

export default GalleryImage;
