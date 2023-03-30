import React from "react";
import {
  Popover,
  Button,
  Col,
  Container,
  Row,
  Table,
  OverlayTrigger,
  Form,
  InputGroup,
} from "react-bootstrap";

export default function ModifyUser({AllUsers,setSortUserBy,setNameOfUser }) {
  const Edit = ()=>{

  }
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Edit User</Popover.Header>
      <Popover.Body>
        <Container>
        <Row>    
        {/* encType={'multipart/form-data'} ref={formRef}  */}
        <form   >
        <input placeholder="UserName" name="UserName" className="mb-1 rounded-1"  required></input>
        <input placeholder="Email" name="Email" className="mb-1 rounded-1"required ></input>
        <input placeholder="FirstName" name="FirstName" className="mb-1 rounded-1"required ></input>
        <input placeholder="LastName" name="LastName" className="mb-1 rounded-1"required></input>
        <input placeholder="Gender" name="Gender" className="mb-1 rounded-1"required></input>
        <input placeholder="Password" name="Password" className="mb-1 rounded-1"required></input>
        <input placeholder="Country" name="Country" className="mb-1 rounded-1"required></input>
        <input placeholder="City" name="City" className="mb-1 rounded-1"required></input>
        <input placeholder="PostCode	" name="PostCode" className="mb-1 rounded-1"required type='number'></input>
        <input placeholder="Street" name="Street" className="mb-1 rounded-1"required></input>
        <input placeholder="NumberOfStreet" name="NumberOfStreet" className="mb-1 rounded-1"required></input>

        <Button onClick={Edit} type='submit' >Update</Button>
        </form> 
        </Row>
        </Container>
      </Popover.Body>
    </Popover> 
  );
  // search  by categories
  const FormSelect= (e)=>{ setSortUserBy(e.target.value)}
  const getInputText = (e)=>{setNameOfUser(e.target.value)}
  const DeleteAll = async ()=>{
    let res = await fetch(`http://localhost:3004/Users/DeleteAll`, {
        method: 'DELETE'
})
    let data = await res.json();
    console.log(data)
   } 
 

  return (
   
<Container fluid>
      <Row>         
         <Form.Label aria-label="Name" className="mt-4">Search</Form.Label>

        <Form className="d-flex " >
          <Col md={2}>
            <Form.Select onChange={FormSelect}  >
              <option value="username">User Name</option>
              <option value="email">Email</option>
              <option value="firstname">First Name</option>
              <option value="lastname">Last Name</option>
              <option value="gender">Gender</option>
              <option value="country">Country</option>
              <option value="city">City</option>
              <option value="postcode">Post Code</option>
             
            </Form.Select>
          </Col>
          <Col md={8}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search"
                aria-label="Name"
                aria-describedby="basic-addon1"
                required
                onChange={getInputText}
              />
            </InputGroup>
          </Col>
        </Form>
      </Row>
      <Row className="mt-4">
        <Table bordered responsive hover size="sm" variant="success"  >
          <thead>
            <tr >
              <th className="text-center" >ID</th>
              <th className="text-center"> UserName</th>
              <th className="text-center">Email</th>
              <th className="text-center">FirstName</th>
              <th className="text-center">LastName</th>
              <th className="text-center">Gender</th>
              <th className="text-center">Password</th>
              <th className="text-center">Country</th>
              <th className="text-center">City</th>
              <th className="text-center">PostCode</th>
              <th className="text-center">Street</th>
              <th className="text-center">NumberOfStreet</th>
              <th className="text-center">Delete / Edit</th>
            </tr>
          </thead>
          <tbody>
            {/* {console.log(AllProduct)} */}
            {AllUsers.map((e, index) => {
              return (
                <tr key={index}>
                  <td className="text-center" >{e._id}</td>
                  <td className="text-center">{e.username}</td>
                  <td className="text-center">{e.Email}</td>
                  <td className="text-center">{e.FirstName}</td>
                  <td className="text-center">{e.LastName}</td>
                  <td className="text-center">{e.Gender}</td>
                   <td className="text-center">{e.password}</td> 
                  <td className="text-center">{e.Country}</td>
                  <td className="text-center"> {e.City}</td>
                  <td className="text-center">{e.PostCode}</td>
                  <td className="text-center">{e.Street}</td>
                  <td className="text-center">{e.NumberOfStreet}</td>
                  <td className=" d-flex justify-content-center item align-center">
                    <Button className="bg-danger">Delete</Button>
                    <OverlayTrigger
                      trigger="click"
                      placement="bottom"
                      overlay={popover}
                    >
                      <Button variant="success" className="mx-2">Edit</Button>
                    </OverlayTrigger>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Button className="bg-danger" onClick={DeleteAll}>Delete All</Button>
        </Col>
      </Row>


  



</Container>
  )
}
