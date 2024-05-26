import { React, useEffect, useState } from "react";
// import axios from "axios";
import { ListGroup, Row, Col, Button, Image, ListGroupItem, Form } from "react-bootstrap";
import { useParams, Link, useNavigate} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import {listProductDetails} from '../../actions/productAction';
import Errormessage from "../errormessage";
import Loader from "../loader";


const ProductDetail = ( { match}) => {
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  console.log(id,"idd");
  let history = useNavigate();
  // const [product, setProducts] = useState([]);

  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails)
  // console.log("product details",productDetails);
  const {loading, error, products} = productDetails;
  useEffect(() => {
    // const fetchProducts = async () => {
    //   const res = await axios.get(`/api/products/${id}`);
    //   setProducts(res.data)
    // }
    // fetchProducts();
    dispatch(listProductDetails(id))
  }, [dispatch,match])

  const addToCartHandler=()=>{
    history(`/cart/${id}?qty=${qty}`)
  }
  return (
    <>
    {
      loading ? <Loader/> : error ? <Errormessage varient='danger'>{error}</Errormessage> :
      <div>
              <Link to="/" className="btn btn-light">  &larr; Go Back</Link>
<Row>
        <Col md={5}>
          <Image src={products.image} alt={products.title} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem className='mt-5'>
              <h3>{products.title}</h3>
            </ListGroupItem>
            <ListGroupItem>Price : ${products.price}</ListGroupItem>
            <ListGroupItem>{products.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroupItem>
            <Row>
              <Col> Status :</Col>
              <Col>{products.countInStock > 0 ? "inStock" : "out of stock"}</Col>
            </Row>
          </ListGroupItem>
          {
            products.countInStock > 0 && (
              <ListGroupItem>
                <Row>
                  <span>QTY</span>
                  <Form.Control as="select" value={qty} onChange={(e)=>setQty(e.target.value)}>
                    {
                      [...Array(products.countInStock).keys()].map((i)=>(
                        <option key={i+1} value={i+1}>{i + 1}</option>
                      ))
                    }
                  </Form.Control>
                </Row>
              </ListGroupItem>
            )
          }
          <ListGroupItem>
            <Button className="btn-block" type="button" onClick={addToCartHandler}>
              Add to cart
            </Button>
          </ListGroupItem>
        </Col>
      </Row>
      
      </div>
      }
      
    </>
  );
};

export default ProductDetail;
