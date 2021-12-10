import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function Card({title,
    image,
    parragraph,
    proyectType
}) {
  const dispatch = useDispatch();

  return (
    <div className="cardProyect">
      <img className="imgCard" src={image} alt="img not found" />
      <h2 className="titCardGreen">{title}</h2>
      <p className="parrCard">{proyectType}</p>
      <p className="parrCard">{parragraph}</p>
      <button type="button" name="button" className="btnS">
        <p className="pBtnCard">VER MÁS</p>
      </button>
    </div>
  );

}