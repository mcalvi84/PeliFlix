import React from 'react';


export default function Pelicula(props) {
  return (
    <div className="movie-item-style-2">
      <img src= {props.img} alt="" />
      <div className="mv-item-infor">
        <h6>
          <a href="moviesingle.html">
           {props.titulo}
          </a>
        </h6>
        <p className="rate">
          <i className="ion-android-star"></i>
          <span>{props.calificacion} /10 </span>
        </p>
        <p className="describe">
          {props.children}
        </p>
        <p className="run-time">
          {" "}
          Duracion: {props.duracion} . <span>Edad:{props.edad} </span> .{" "}
          <span>Fecha: {props.fecha} </span>
        </p>
        <p>
          Director:<a href="#">{props.director} </a>
        </p>
        <p>
          Actores: <a href="#">{props.actores} </a>
        </p>
      </div>
    </div>
  );
}
