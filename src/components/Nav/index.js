import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar">
    <ul>
        <li className="brand" href="/">Fighter Aircraft Clicky Game!</li>
        <li className="">Click an image to begin!</li>
        <li>Score: {props.count} | Top Score: {props.count}</li>
    </ul>
</nav>  
  )}

export default Nav;
