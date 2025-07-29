import React,{useEffect} from 'react'
import {Row,Col,Button,ListGroup,Image,Card, ListGroupItem} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import {createOrder} from "../../actions/orderAction"
import {useDispatch, useSelector} from 'react-redux';
import Errormessage from "../errormessage";
import CheckoutStep from "./checkoutStep"

const PlaceOrderScreen = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const orderCreate = useSelector(state => state.orderCreate);
    const {order, success, error} = orderCreate;
    let history = useNavigate();

    const addDecimal =(num)=>{
        return (Math.round(num*100)/100).toFixed(2); 
    }

    cart.itemsPrice = addDecimal(cart.cartItems.reduce((acc,item)=> acc+item.price*item.qty,0))
    cart.shippingPrice = addDecimal(cart.cartItems > 500 ? 0 : 100)
    cart.taxPrice = addDecimal(Number((0.15*cart.itemsPrice).toFixed(2)));
    cart.totalPrice = Number(cart.itemsPrice)+Number(cart.shippingPrice)+Number(cart.taxPrice);

    const placeOrderHandler = () =>{
        dispatch(
            createOrder({
                orderItems : cart.cartItems,
                shippingAddress : cart.shippingAddress,
                paymentMethod : cart.paymentMethod,
                itemPrice : cart.itemPrice,
                shippingPrice : cart.shippingPrice,
                taxPrice : cart.taxPrice,
                totalPrice : cart.totalPrice
            })
        )
    }

    useEffect(() => {
      if(success){
            history(`/order/${order._id}`);
            <Link to={`/order/${order._id}`}> </Link>
      }
      //eslint-disable-next-line
    }, [success])
    

  return (
    <>
    <CheckoutStep step1 step2 step3 step4/>
    <Row>
        <Col md={8}>
        <ListGroup variant='flush'>
            <ListGroup.Item>
                <h2>Shipping</h2>
                <p><strong>Address :  </strong> 
                {cart.shippingAddress.address},&nbsp;
                {cart.shippingAddress.city},&nbsp;
                {cart.shippingAddress.postalCode},&nbsp;
                {cart.shippingAddress.country}
                </p>
            </ListGroup.Item>

            <ListGroup.Item>
                <h2>Payment Method</h2>
                <p><strong>{cart.paymentMethod}</strong> 
                
                </p>
            </ListGroup.Item>

            <ListGroup.Item>
                <h2>Order Items</h2>
                {cart.cartItems.length ===0 ? (<Errormessage>Your cart is Empty</Errormessage>)
                 : (<ListGroup variant='flush'>
                    {cart.cartItems.map(((item,index)=>(
                        <ListGroup.Item key={index}>
                            <Row>
                                <Col md={1}>
                                <Image src={item.image} alt={item.name} fluid/>
                                </Col>
                                <Col>
                                <Link to={`/product/${item.product}`}>
                                    {item.name } product detail
                                </Link>
                                </Col>
                                <Col md={4}>{item.qty} X ${item.price} = ${item.price*item.qty}</Col>
                            </Row>
                        </ListGroup.Item>
                    )))}
                 </ListGroup> )}
                <p><strong> Address :  </strong> 
                {cart.shippingAddress.address},&nbsp;
                {cart.shippingAddress.city},&nbsp;
                {cart.shippingAddress.postalCode},&nbsp;
                {cart.shippingAddress.country}
                </p>
            </ListGroup.Item>
        </ListGroup>
        </Col>
            
        <Col md={4}>
        <Card>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h2>Order Summary</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>
                        Items
                        </Col>
                        <Col>
                        ${cart.itemsPrice}
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        shipping
                        </Col>
                        <Col>
                        ${cart.shippingPrice}
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        Tax
                        </Col>
                        <Col>
                        ${cart.taxPrice}
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        Total
                        </Col>
                        <Col>
                        ${cart.totalPrice}
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    {error && <Errormessage variant="danger">{error}</Errormessage>}
                </ListGroup.Item>
                <Button type='button' className='btn-block' disabled={cart.cartItems ===0} onClick={placeOrderHandler}>
                    Place Order
                </Button>
            </ListGroup>
        </Card>
        </Col>
    </Row>
    </>
  )
}

export default PlaceOrderScreen