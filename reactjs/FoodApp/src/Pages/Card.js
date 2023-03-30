import React from "react";
import { Link } from "react-router-dom";

export default function Card({ meals }) {
  return (
    <div
      className="  rounded rounded float-start  "
      key={meals.idMeal}
    >
      <div className="strCategory">
      <Link to={`/${meals.idMeal}`}>


        <img
          src={meals.strMealThumb}
          alt="file isn't available"
          className=" rounded-4 img-float-start  img-thumbnail "
        /></Link>
      </div>
      <h4 className="strMeal ">{meals.strMeal}</h4>
    </div>
  );
}
