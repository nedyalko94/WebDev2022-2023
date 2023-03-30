import React,{useEffect, useState} from 'react'
import { Route, Routes } from "react-router-dom"
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import AddProduct from './Pages/AddProduct'
import ModifyProduct from './Pages/ModifyProduct'
import Contact from './Pages/Contact'
import AddUser from './Pages/AddUser'
import ModifyUser from './Pages/ModifyUser'


function App() {
  const [ AllProduct,setAllProduct] =useState([]) 
  const [ AllUsers,setAllUser] =useState([]) 
  const [ SortBy,setSortBy] =useState('name') 
  const [ NameOf,setNameOf] =useState('') 
  const [SortUserBy,setSortUserBy]=useState('username')
  const [NameOfUser,setNameOfUser]=useState('')
  

  useEffect(()=>{
         fetch(`http://localhost:3004/Product/?${SortBy}=${NameOf}`)
        .then(res=>res.json())
        .then(data=>{
          // console.log(data.Product)
          setAllProduct(data.Product)
        })
      },[SortBy,NameOf])

    useEffect(
      ()=>{
        fetch(`http://localhost:3004/Users/findUser?${SortUserBy}=${NameOfUser}`)
       .then(res=>res.json())
       .then(data=>{
        //  console.log(data.User)
         setAllUser(data.User)
       })
     } ,[SortUserBy,NameOfUser])


  return (

<Layout>
   <Routes>

      <Route path='/' element={<Home/>}  />
      <Route path='/AddProduct' element={<AddProduct/>}/>
      <Route path='/ModifyProduct' element={<ModifyProduct AllProduct={AllProduct} setNameOf={setNameOf}  setSortBy={setSortBy}   />}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/AddUser' element={<AddUser/>}/>
      <Route path='/ModifyUser' element={<ModifyUser AllUsers={AllUsers} setSortUserBy={setSortUserBy} setNameOfUser={setNameOfUser} />}/>

      

   </Routes>
   </Layout>

  )
}

export default App


// getBtn.addEventListener("click", (e)=>{
//   console.log("hi")
//   fetch('http://localhost:5000/api')
//   .then(res=>res.json())
//   .then(data=>{
//       console.log(data)
//   })
//   e.preventDefault()   //  prevent refresh the page 

// })