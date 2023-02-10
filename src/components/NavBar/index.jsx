import React from "react";
import { Link } from "react-router-dom";
import s from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={s.navBar}>
      <div className={s.containerLogo}>
        <Link to="/home">
          <img
            className={s.logo}
            src="https://www.pngkey.com/png/full/5-51313_rick-and-morty-circle.png"
            alt="logo"
          />
        </Link>
        <Link to="/home" className={s.buttonHome}>
          Home
        </Link>
      </div>

      <div className={s.containerButtons}>
        <Link to="/personajes">
          <button className={s.buttons}>Personajes</button>
        </Link>
        <Link to="/episodios">
          <button className={s.buttons}>Episodios</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
