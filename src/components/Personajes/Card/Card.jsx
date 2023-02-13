import React from "react";
import s from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ name, image, id }) => {
  return (
    <Link to={`/personajes/detalles/${id}`} className={s.link}>
      <div className={s.card}>
        <h2 className={s.name}>{name}</h2>
        <img className={s.image} src={image} alt={name} />
      </div>
    </Link>
  );
};

export default Card;
