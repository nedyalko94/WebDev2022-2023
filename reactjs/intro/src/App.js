import logo from './logo.svg';
import './App.css';
import ChildComponent from './ChildComponent';
import {useState} from 'react'
/*
Classes
Arrow Functions
Variables (let, const, var)
Array Methods like .map()
Destructuring
Modules
Ternary Operator
Spread Operator
*/


function App() {

const [number ,setNumber] =useState (1)
  function handleClick () {
    number +=1
    console.log('click',number)
  }
  return (
   <div>
     <ChildComponent/>
    <h1>Hello world</h1>
    <button onClick = {handleClick}></button>
   </div>
 
  );
}

export default App;
