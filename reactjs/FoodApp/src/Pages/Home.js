import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "./Card";
// import FoodDetail from './FoodDetail'
// import  getAll  from '../action/fetch_action '

function Home({inputValue, searchByName,MealsCatFilter,setMealsCatFilter,setInputValue } ) {
  const [result, setResult] = useState(undefined);
  const [firstChar, setFirstChar] = useState("b");
  // {console.log(firstChar)}
  // const { meal_id } = useParams()
  const getByFirstChar = (e) => { 
    setFirstChar(e.target.id);
    setMealsCatFilter(null);
    setInputValue(''); 
    return;
  };
  
  //  alphabet gen
    function genCharArray(charA, charZ) {
    var a = [],
      i = charA.charCodeAt(0),
      j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
      a.push(String.fromCharCode(i)); 
    }
    return a;
  }


  useEffect(() => {
    async function getAlphabetResult() {
      let res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstChar}`
      );
      let data = await res.json();
      if(data.meals===null){
        // console.log(data.meals)
        return    setResult(undefined);

      }
      else{
        return  setResult(data.meals);
    }
    }
    getAlphabetResult();
  }, [firstChar]);

 
  return (
    <Container fluid className=" mb-5 mainContainer">
      {/* BUTTONS */}
      {genCharArray("a", "z").map((e, index) => (
        
        <Button
          onClick={getByFirstChar}
          className=" btn justify-content-center  m-1 px-3 my-3"
          id={e}
          key={index}
        >
          {e}
        </Button>
      ))}

      <Row>

         

        {  inputValue !==''
          ?
         searchByName.map((meals, index) => 
              <Col md={6} sm={8} lg={4} xl={2} key={index}>
                <Card meals={meals} key={index} />
              </Col>
            )
            : MealsCatFilter !== null ? MealsCatFilter.map((meals, index) => 
              <Col md={6} sm={8} lg={4} xl={2} key={index}>
                <Card meals={meals} key={index} />
              </Col>
            )
            : result !== undefined 
          ? result.map((meals, index) => (
              <Col md={6} sm={8} lg={4} xl={2} key={index}>
               
                <Card meals={meals} key={index} />
              </Col>
            ))
          : <h1> No result have been found</h1>
          }
      </Row> 
    </Container>
  );
}

export default Home;
