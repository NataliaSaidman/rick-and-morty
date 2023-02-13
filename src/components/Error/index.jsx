import React from "react";
import s from "./Error.module.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className={s.backgroundError}>
      <h1 className={s.titleError}>ERROR</h1>
      <img
        className={s.imgError}
        src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_1280.png"
        alt="error"
      />
      <Link to="/">
        <button className={s.buttonError} type="button">
          GET ME HOME
        </button>
      </Link>
    </div>
  );
};

export default Error;
