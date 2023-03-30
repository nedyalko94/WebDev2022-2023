import React, {   useRef } from "react";
import {  Button, Container, Form, InputGroup } from "react-bootstrap";

export default function AddProduct() {
  const formRef = useRef({})
  // const getFormDatas = function (formData) {
  //   var values = {};
  //   for (var pair of formData.entries()) {
  //     var key = pair[0];
  //     var value = pair[1];
  //     if (values[key]) {
  //       if (!(values[key] instanceof Array)) {
  //         values[key] = new Array(values[key]);
  //       }
  //       values[key].push(value);
  //     } else {
  //       values[key] = value;
  //     }
  //   } 
  //   return values;
  // }
  const AddNewProduct = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    // const getFormData = getFormDatas(formData)
    console.log(formData)
    fetch('http://localhost:3004/Product/AddProduct',{
      method:'POST',
      body:formData,
    })
    .then((result) => {
    console.log("🚀 ~ file: AddProduct.js ~ line 35 ~ .then ~ result", result)
    }) 
      .catch((err)=>{
        console.log(err.message)       
      })    
   }
  return (
    <Container>
      <Form  ref={formRef} encType={'multipart/form-data'} onSubmit={(e) => e.preventDefault()} >
        <Form.Label >Product Name</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Name Of The Product"
            aria-label="Name"
            name="Name"
            required={true} 
          />
        </InputGroup>
        <Form.Label >Product Brand</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Brand"
            aria-label="Brand"
            name="Brand"
            required={true}
          />
        </InputGroup>
        <Form.Label>Product CountOfStock</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Number of stock"
            aria-label="Recipient's username"
            type={Number}
            name="CountOfStock"
            required={true}

          />
        </InputGroup>
        {/* <Form.Label>Existing Product Categories</Form.Label>
      <Form.Select >
        <option >Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select> */}
        <Form.Label aria-label="New Product Categories">Create new Product Categories</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="New Product Categories"
            aria-label="New Product Categories"
            name="Categories"
            required={true}

          />
        </InputGroup>
        <Form.Label aria-label="Description">Product Description</Form.Label>
        <InputGroup>
          <Form.Control
            as="textarea"
            aria-label="Description"
            placeholder="Description"
            name="Description"
            required={true}

          />
        </InputGroup>
        <Form.Label  aria-label="Product Price">Product Price</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Price"
            aria-label="Product Price"
            name="Price"
            type={Number}
            required={true}

          />
        </InputGroup>
        <Form.Label>Rating</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Rating"
            aria-label="Recipient's username"
            name="Rating"
            type={Number}
            required={true}

          />
        </InputGroup>
        <Form.Label >NumberOfVote</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="NumberOfVote"
            aria-label="NumberOfVote"
            name="NumberOfVote"
            type={Number}
            required={true}

          />
        </InputGroup>
        <Form.Group className="position-relative mb-3">
          <Form.Label>Picture of te Product</Form.Label>
          <Form.Control
            type="file"
            name="Picture" 
            required={true}

            />
        </Form.Group>
        <Button type="submit" onClick={AddNewProduct} >Upload</Button>
      </Form>
    </Container> 
  ); 
}    