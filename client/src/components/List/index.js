import React from "react";
// import "./style.css";

//MAKE THIS LIST A TABLE!!!!!!!!!!!!!!!!!!!!!!!
// export function List({ children }) {
export function List() {
  return (
    <div className="list-overflow-container">
      {/* <ul className="list-group">{children}</ul> */}
      <ul className="list-group">
        <ListItem />
      </ul>
    </div>
  );
}

// export function ListItem({ children }) {
export function ListItem() {
  // return <li className="list-group-item">{children}</li>;
  return (
    <>
      <li className="list-group-item">12/21/2019 | $10.00</li>
      <li className="list-group-item">12/21/2019 | $10.00</li>
      <li className="list-group-item">12/21/2019 | $10.00</li>
      <li className="list-group-item">12/21/2019 | $10.00</li>
      <li className="list-group-item">12/21/2019 | $10.00</li>
    </>
  );
}
