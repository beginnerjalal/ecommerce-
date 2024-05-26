import React from 'react'
import { Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Product = ({prod}) => {
  return (
    <>
    <Link to={`/product/${prod._id}`}>
     <Card style={{ width: '18rem' }}>
      <Link to={`/product/${prod._id}`}>
      <Card.Img variant="top" src={prod.image} />
      </Link>
      <Card.Body>
      <Card.Text as="div">
        ${prod.price}
        </Card.Text>
        <Card.Title>{prod.title}</Card.Title>
        <Card.Text>
        {prod.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Link>
    </>
  )
}

export default Product