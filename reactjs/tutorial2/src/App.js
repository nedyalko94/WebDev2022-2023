import React, { useState } from 'react'
import { Button, Col, Container, Row,Badge } from 'react-bootstrap'
import TodoList from './TodoList'
function App() {
// push to state array 


// spread an array into the state array 
//



    const [users, setUsers] = useState([]) // username // number 5[]
    // fetching data in react.js
    const fetchingData = async () => {
        console.log('retrieving data...')
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        setUsers(data)
    }
    // end of fetching data 
    const getDetailOfUser = (param)=>{ console.log('test',param)
    setCurentUser(param)}
    const [curentUser,setCurentUser]=useState({})
    return (
        <Container className="bg-dark text-light p-5">
            <TodoList></TodoList>
            {/* <Row className="justify-content-center">
                <Col md={5}>
                    <h1>Fetch data</h1>
                    <Button onClick={fetchingData}>Get Users Data</Button>
                </Col >
                <Col md={5}>
                   <h1>Detail</h1>
                   <p><Badge>phone</Badge> {curentUser.phone}</p>
                   <p><Badge>email</Badge>{curentUser.email}</p>
                   <p><Badge>username</Badge>{curentUser.username}</p>
                  
                </Col >
                {console.log(users)}
                {
                    users.map((user,index)=>(
                        <div key={index} onClick = {()=>getDetailOfUser(user)}>
                            <p>{user.name}</p>
                        {console.log()}
                        </div>
                    )
                    )
                }
            </Row> */}
        </Container>
    )
}

export default App