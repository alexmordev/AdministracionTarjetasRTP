import React from "react";
import "./style.css";

export const Multi_boton = () => {
  return (
    <nav className="menu">
      <input
        type="checkbox"
        href="#"
        className="menu-open"
        name="menu-open"
        id="menu-open"
      />
      <label className="menu-open-button" for="menu-open">
        <span className="lines line-1"></span>
        <span className="lines line-2"></span>
        <span className="lines line-3"></span>
      </label>

      <a href="#" className="menu-item blue">
        {" "}
        <i className="fa fa-anchor">Renovar</i>{" "}
      </a>
      <a href="#" className="menu-item green">
        {" "}
        <i className="fa fa-coffee">PIN</i>{" "}
      </a>
      <a href="#" className="menu-item red">
        {" "}
        <i className="fa fa-heart"></i>{" "}
      </a>
      <a href="#" className="menu-item purple">
        {" "}
        <i className="fa fa-microphone"></i>{" "}
      </a>
      <a href="#" className="menu-item orange">
        {" "}
        <i className="fa fa-star"></i>{" "}
      </a>
      <a href="#" className="menu-item lightblue">
        {" "}
        <i className="fa fa-diamond"></i>{" "}
      </a>
    </nav>
  );
};
