import React, { useState, useEffect } from "react";
// x
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import FoodDetail from "./FoodDetail";

function Detail() {
  const [IdMeal, setIdMeal] = useState([])
  //   const youtubeKey = () => {
  //     let baseLink = randomResult[0].strYoutube;
  //     let baseArray = baseLink.split("=");
  //     return baseArray[1];
  //   };
  const { id } = useParams()

  useEffect(() => {

    const IdMeal = async () => {
      await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => setIdMeal(data.meals))

    }
    IdMeal()
  }, [id])

  return (

    <Container className="mainContainer">
      {IdMeal !== undefined ? (
        <FoodDetail randomResult={IdMeal} />
      ) : (
        "Loading... "
      )}

    </Container>
  );
}

export default Detail;
