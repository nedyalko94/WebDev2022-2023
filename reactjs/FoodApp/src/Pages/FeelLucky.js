import React from "react";
import { Container } from "react-bootstrap";
import FoodDetail from "./FoodDetail";

function FeelLucky({ randomResult }) {

  
  return (
    <Container className="mainContainer bg-light" >
    
      {randomResult[0] !== undefined ? (
        <FoodDetail randomResult={randomResult} />
      ) : (
        "Loading... lucky"
      )}
 
    </Container>
  );
}

export default FeelLucky;
