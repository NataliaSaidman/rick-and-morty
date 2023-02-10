import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import s from "./Personajes.module.css";
import Card from "./Card/Card";
import { TbPlayerTrackPrev, TbPlayerTrackNext } from "react-icons/tb";

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [input, setInput] = useState([]);
  const [busqueda, setBusqueda] = useState([]);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState("false");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(
        `https://rickandmortyapi.com/api/character/?name=${busqueda}&&page=${count}`
      )
        .then((res) => res.json())
        .then((data) => setPersonajes(data.results));
      setLoading(false);
    }, 3000);
    return () => setPersonajes([]);
  }, [busqueda, count]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setBusqueda(input);
  };

  const handleClickNext = () => {
    setCount(count + 1);
  };

  const handleClickPrev = () => {
    setCount(count - 1);
  };

  return (
    <div className={s.container}>
      <form>
        <input
          className={s.input}
          type="text"
          placeholder="Buscador de personajes"
          onChange={handleChange}
        />
        <button onClick={handleClick} className={s.button}>
          Buscar
        </button>
      </form>
      <div>
        <button className={s.button__pages} onClick={handleClickPrev}>
          <TbPlayerTrackPrev className={s.icon} />
        </button>
        <button className={s.button__pages} onClick={handleClickNext}>
          <TbPlayerTrackNext className={s.icon} />
        </button>
      </div>

      <div className={s.cardContainer}>
        {loading && (
          <img
            className={s.loading}
            src="https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif"
            alt="gif"
          />
        )}
        {personajes.map((p) => (
          <Card key={p.id} name={p.name} image={p.image} />
        ))}
      </div>
    </div>
  );
};

export default Personajes;
