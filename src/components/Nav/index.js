import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar">
    <ul>
        <li className="brand"><a href="/">{props.children}</a></li>
        <li className="">Click an image to begin!</li>
        <li>Score: 0 | Top Score: 0</li>
    </ul>
</nav>  
  )}

export default Nav;
