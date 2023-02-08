import s from "./Card.module.css";

const Card = ({ name, date, episode }) => {
  return (
    <div className={s.card}>
      <h2 className={s.name}>{name}</h2>
      <span>Fecha: {date}</span>
      <span>Episodio: {episode}</span>
    </div>
  );
};

export default Card;
