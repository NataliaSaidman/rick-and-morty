import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import s from "./Detalles.module.css";

const DetallesPersonajes = () => {
  const params = useParams();
  const [personaje, setPersonaje] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${params.idPersonajes}`)
      .then((res) => res.json())
      .then((data) => {
        setPersonaje(data);
      });
  }, [params]);

  return (
    <div className={s.container}>
      <h1>{personaje.name}</h1>
      <div className={s.detalles}>
        <img src={personaje.image} alt={personaje.name} />
        <div className={s.descripcion}>
          <span>Gender: {personaje.gender}</span>
          <span>Status: {personaje.status}</span>
          <span>Species: {personaje.species}</span>
          <Link to="/">
            <button className={s.buttonError} type="button">
              GET ME HOME
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetallesPersonajes;
