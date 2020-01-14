import React from "react";
// import "./style.css";

//MAKE THIS LIST A TABLE!!!!!!!!!!!!!!!!!!!!!!!
// export function List({ children }) {
export function List(props) {
  console.log("INSIDE", props);
  return null;
  // <div className="list-overflow-container">
  //   {props.datas.map(donation=><li className="list-group-item">{donation.transactionDate} | {donation.amount}</li>)}
  //   {/* <ul className="list-group">{children}</ul> */}
  //   <ul className="list-group"></ul>
  // </div>
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
