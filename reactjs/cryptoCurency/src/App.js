import React, { useState } from 'react'
import { Button, InputGroup, Container,ListGroup } from 'react-bootstrap'
import Cryptocurrency from './Cryptocurreny'

function App() {

  const [users, setUsers] = useState([]) // username // number 5[]
    // fetching data in react.js
    const fetchingData = async () => {
        console.log('retrieving data...')
        let response = await fetch('https://arkakapi.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=46cb6a30-7b16-428c-833a-0f1a4642c3dc&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=EUR')
        let data = await response.json()
        setUsers(data)
    }





  return (
    <Container className="bg-dark text-light p-5">
    <Cryptocurrency></Cryptocurrency>
    
   
</Container>
  )
}

export default App