import React from "react";
import s from "./Card.module.css";

const Card = ({ name, image }) => {
  return (
    <div className={s.card}>
      <h2 className={s.name}>{name}</h2>
      <img src={image} alt={name} />
    </div>
  );
};

export default Card;
