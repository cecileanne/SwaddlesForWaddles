import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 300,
        clear: "both",
        paddingTop: 120,
        textAlign: "center"
      }}
      className="jumbotron"
    >
      {children} {/* header on most pages, carousel in Swaddle */}
    </div>
  );
}

export default Jumbotron;
