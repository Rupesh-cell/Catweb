import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';
import axios from "axios";
import "../scss/render.scss";

const Render = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  const getProducts = () => {
    const options = { method: "GET", url: "https://fakestoreapi.com/products" };

    axios
      .request(options)
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="main">
      <div className="card-group">
        <div className="card-collector">

        

   
    {products.map((item, index) => {
      return(

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
         {item.price}Rs
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button href="">Addtocart</Button>
      </Card.Body>
    </Card>
    
    )
    
})}
     </div>
     </div>
     </div>

    
    
    
    )

   
    

};

export default Render;
