import React from "react";
import CardsSCSS from "./Card.module.scss";

const Card = props => {
  return (
    <article>
      <h3>{props.title}</h3>
      <p> {props.playCount}</p>
    </article>
  );
};

export default Card;
