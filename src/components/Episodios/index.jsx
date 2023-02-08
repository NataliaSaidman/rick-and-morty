import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import s from "./Episodios.module.css";
import Card from "./Card/Card";
import { TbPlayerTrackPrev, TbPlayerTrackNext } from "react-icons/tb";

const Episodios = () => {
  const [episodios, setEpisodios] = useState([]);
  const [input, setInput] = useState([]);
  const [busqueda, setBusqueda] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        `https://rickandmortyapi.com/api/episode/?name=${busqueda}&&page=${count}`
      )
        .then((res) => res.json())
        .then((data) => setEpisodios(data.results));
    }, 3000);
    return () => setEpisodios([]);
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
      <h1 className={s.title}>Rick and Morty</h1>
      <form>
        <input
          className={s.input}
          type="text"
          placeholder="Buscador de episodios"
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
        {episodios.map((e) => (
          <Card
            key={e.id}
            name={e.name}
            date={e.air_date}
            episode={e.episode}
          />
        ))}
      </div>
    </div>
  );
};

export default Episodios;
