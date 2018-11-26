import React from "react";
import "./BookCard.css";

const BookCard = props => (
  <div className="card">
    
    <div className="content">
      <ul>
        <li>
          <strong>Title:</strong> {props.title}
        </li>
        <li>
          <strong>Authors:</strong> {props.authors}
        </li>
        <li>
          <strong>Description:</strong> {props.description}
        </li>
        <li>
          <strong>Link:</strong> {props.link}
        </li>
      </ul>
    </div>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    {/* <span className="remove" onClick = {() => props.removeFriend(props.id)} >𝘅</span> */}
  </div>
);

export default BookCard;
