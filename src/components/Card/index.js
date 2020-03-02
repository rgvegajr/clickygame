import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card-body">
      <p className="card-text"></p>
        <img alt={props.name} src={props.image} onClick={() => props.handleClick(props.id, props.name)} className="clicked"/>
    </div>
  );
}

export default Card;
