import React, { useEffect, useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import FeelLucky from './Pages/FeelLucky'
import Detail from './Pages/Detail'

function App() {
  const [randomResult,setRandomResult] = useState([])
  const [Categories,setCategories] = useState([])
  const[inputValue,setInputValue] =useState('')
 const [searchByName,setSearchByName] = useState(null)
 const [MealsCatFilter,setMealsCatFilter] = useState(null)

 //-------------------- api source --------https://www.themealdb.com/api.php-------------------------------------------



useEffect(()=>{

  async function RandomMeal() {
    let res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    let data = await res.json()
    // console.log(data.meals)
    setRandomResult(data.meals)

  }
  RandomMeal()
},[])
useEffect(()=>{
  const Categories = async()=>{
    const fetchData = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    const response = await fetchData.json()
    setCategories(response.categories)

  }
  Categories()
},[])

const CategoriesFilter=async(e)=>{
  // console.log(e.target.id)
   const fetchData = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${e.target.id}`)
   const response = await fetchData.json() 
   setMealsCatFilter(response.meals)


}


    useEffect(() => {
    async function getByName() {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        let data = await res.json()
        setSearchByName(data.meals)       
    }
     getByName()
}
    , [inputValue])


  return (
    <Layout 
      Categories={Categories}  CategoriesFilter={CategoriesFilter} setInputValue={setInputValue} inputValue={inputValue}>
    <Routes>
       <Route path='/' element={<Home inputValue={inputValue} setMealsCatFilter={setMealsCatFilter} 
       setInputValue={setInputValue} searchByName={searchByName} MealsCatFilter={MealsCatFilter}/>}  />
        <Route path='/:id' element={<Detail/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/FeelLucky!' element={<FeelLucky randomResult={randomResult}  />} />
    </Routes>
    </Layout>
   
 
  )
}

export default App