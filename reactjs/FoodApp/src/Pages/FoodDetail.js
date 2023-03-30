import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function FoodDetail({ randomResult }) {
  // const[IdDetails,setIdDetails]= useState()
  const youtubeKey = () => {
    let baseLink = randomResult[0].strYoutube;
    let baseArray = baseLink.split("=");
    return baseArray[1];
  };



  return (
    
    <Container fluid className="mb-4 ">
      {randomResult[0] !== undefined  ? (
        <>
          <Row>
            <Col md={12} lg={6}>
              <div className="strMealThumb   img-thumbnail  rounded float-start m-3">
                <img className="img-fluid" 
                  src={randomResult[0].strMealThumb}
                  alt="file isn't available"
                />
              </div>
            </Col>
            <Col>
              <h1 className="strMeal py-3">{randomResult[0].strMeal}</h1>
              <h6 className="strCategory">
                Categories: {randomResult[0].strCategory}
              </h6>
              <h6 className="strArea">
                Dish Origin: {randomResult[0].strArea}
              </h6>
              

              <h2>Ingredients</h2>
              <ul className="px-1">
                <li className="Measure">
                  
                  <span>  {randomResult[0].strIngredient1} </span>
                  <span className="Ingredient">
                    {randomResult[0].strMeasure1}
                  </span>
                </li>
                <li className="Measure">
                 <span> {randomResult[0].strIngredient2}  </span>
                 
                  <span className="Ingredient">
                    {randomResult[0].strMeasure2}
                  </span>
                </li>
                <li className="Measure">
                <span>    {randomResult[0].strIngredient3}  </span>
               
                  <span className="Ingredient">
                    {randomResult[0].strMeasure3}
                  </span>
                </li>
                <li className="Measure">
                  <span>{randomResult[0].strIngredient4} </span>
                  
                  <span className="Ingredient">
                    {randomResult[0].strMeasure4}
                  </span>
                </li>
                <li className="Measure">
                <span>{randomResult[0].strIngredient5} </span>
                  
                  <span className="Ingredient">
                    {randomResult[0].strMeasure5}
                  </span>
                </li>
                <li className="Measure">
                <span>{randomResult[0].strIngredient6} </span>
                  
                  <span className="Ingredient">
                    {randomResult[0].strMeasure6}
                  </span>
                </li>
                <li className="Measure">
                <span>{randomResult[0].strIngredient7} </span>
                  
                  <span className="Ingredient">
                    {randomResult[0].strMeasure7}
                  </span>
                </li>
                <li className="Measure">
                <span>{randomResult[0].strIngredient8} </span>

                  
                  <span className="Ingredient">
                    {randomResult[0].strMeasure8}
                  </span>
                </li>
                <li className="Measure">
                <span>{randomResult[0].strIngredient9} </span>
                  
                  
                  <span className="Ingredient">
                    {randomResult[0].strMeasure9}
                  </span>
                </li>
                <li className="Measure">
                <span>{randomResult[0].strIngredient10} </span>
                  
                  
                  <span className="Ingredient">
                    {randomResult[0].strMeasure10}
                  </span>
                </li>
                <li className="Measure">
                <span>{randomResult[0].strIngredient11} </span>
                  
                  <span className="Ingredient">
                    {randomResult[0].strMeasure11}
                  </span>
                </li>
                <li className="Measure">
                <span>{randomResult[0].strIngredient12} </span>
                  
                  
                  <span className="Ingredient">
                    {randomResult[0].strMeasure12}
                  </span>
                </li>
                <li className="Measure">

                <span> {randomResult[0].strIngredient13} </span>
                  <span className="Ingredient">
                    {randomResult[0].strMeasure13}
                  </span>
                </li>
                <li className="Measure">
                <span>{randomResult[0].strIngredient14} </span>
                  
                  
                  <span className="Ingredient">
                    {randomResult[0].strMeasure14}
                  </span>
                </li>
                <li className="Measure">
                <span>{randomResult[0].strIngredient15} </span>

                  <span className="Ingredient">
                    {randomResult[0].strMeasure15}
                  </span>
                </li>
                <li className="Measure">
                <span>{randomResult[0].strIngredient16} </span>
                  
                  
                  <span className="Ingredient">
                    {randomResult[0].strMeasure16}
                  </span>
                </li>
                <li className="Measure">
                <span>{randomResult[0].strIngredient17} </span>
                  
                  <span className="Ingredient">
                    {randomResult[0].strMeasure17}
                  </span>
                </li>
                <li className="Measure">
                <span>{randomResult[0].strIngredient18} </span>
                  
                  
                  <span className="Ingredient">
                    {randomResult[0].strMeasure18}
                  </span>
                </li>
                <li className="Measure">
                <span>{randomResult[0].strIngredient19} </span>
                  
                  
                  <span className="Ingredient">
                    {randomResult[0].strMeasure19}
                  </span>
                </li>
                <li className="Measure">
                <span>{randomResult[0].strIngredient20} </span>
                  
                  
                  <span className="Ingredient">
                    {randomResult[0].strMeasure20}
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
          <h6>How to make it :</h6>
          <p className="strInstructions">{randomResult[0].strInstructions}</p>
          <Row fluid className="m-2" md={12}>
            {randomResult[0].strSource !== undefined ? (
             
              <iframe 
              width={640} height={360}
                src={`https://www.youtube.com/embed/${youtubeKey()}`}
                title="YouTube video player"
                className="youtube-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              ""
            )}
          </Row>
        </>
      ) : (
        "Loading.."
      )}
    </Container>
  );
}

export default FoodDetail;
