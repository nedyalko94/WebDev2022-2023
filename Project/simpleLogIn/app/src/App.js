import React, { useState } from "react";
import axios from 'axios'

function App() {
  const [RegUsername,setRegUsername ] = useState('')
  const [RegPassword,setRegPassword]= useState('')
  const [LogInUsername,setLogInUsername ] = useState('')
  const [LogInPassword,setLogInPassword]= useState('')
  const [Data,setData] = useState({})

  const Reg = () =>{
    axios({
      method:'POST',
      data:{
        username:RegUsername,
        password:RegPassword
      },withCredentials:true,
      url:'http://localhost:3001/register' 

    }).then((e)=>console.log(e)) 

  }

  const LogIn = ()=>{
    axios({
      method:'POST',
      data:{
        username:LogInUsername, 
        password:LogInPassword
      },withCredentials:true,
      url:'http://localhost:3001/login'

    }).then((e)=>console.log(e))

  }

  const getUser = ()=>{
    axios({
      method:'GET',
      withCredentials:true,
      url:'http://localhost:3001/user' 

    }).then((e)=>setData(e.data))
  }

  return (
    <div className="App">
       
      <div>
     
        <h1> register</h1>
   <input type="text" name=""  placeholder="username" onChange={(e)=>setRegUsername(e.target.value)}/><br></br>
      <input type="text" name=""  placeholder="password" onChange={(e)=>setRegPassword(e.target.value)}/>
        <button type="submit" onClick={Reg}>Reg</button>
      </div>
      <div>
        <h1>login</h1>
      <input type="text" name=""  placeholder="username" onChange={(e)=>setLogInUsername(e.target.value)}  /><br></br>
      <input type="text" name=""   placeholder="password" onChange={(e)=>setLogInPassword(e.target.value)}/>
        <button type="submit"onClick={LogIn}>log in </button>
      
      </div>
      <div>
      <h1>Get</h1>
     
        <button type="submit" onClick={getUser}>log in </button>
        {Data.username ? <h1>welcome  {Data.username}</h1>:""}


      </div>
    </div>
  );
}

export default App;
