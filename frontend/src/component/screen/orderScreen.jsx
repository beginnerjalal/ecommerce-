import React,{useEffect} from 'react'
import {Row,Col,Button,ListGroup,Image,Card, ListGroupItem} from 'react-bootstrap';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {getOrderDetails} from "../../actions/orderAction"
import {useDispatch, useSelector} from 'react-redux';
import Errormessage from "../errormessage";
import Loader from "../loader";

const OrderScreen = ({match}) => {
    // const orderId = match.params.id;
    
    const { id } = useParams();
    console.log(id,"id from order screen");
    const dispatch = useDispatch();

    const orderDetails = useSelector(state=> state.orderDetails)
    const {order,loading,error} = orderDetails; 

    if(!loading){
        const addDecimal =(num)=>{
            return (Math.round(num*100)/100).toFixed(2); 
        }
        order.itemsPrice = addDecimal(
            order.orderItems.reduce((acc,item)=> acc+item.price*item.qty,0))
       
    }
    useEffect(() => {
      dispatch(getOrderDetails(id))      
    }, [dispatch, id])
      
  return loading ? <Loader /> : error ? 
  <Errormessage variant="danger">{error} </Errormessage>
  : <>
    <h2>Order {order._id}</h2>
    <Row>
        <Col md={8}>
        <ListGroup.Item variant='flush'>
        <h2>Shipping</h2>
                <p><strong>Address :  </strong> 
                
                {/* {order.shippingAddress.address},&nbsp;
                {order.shippingAddress.city},&nbsp;
                {order.shippingAddress.postalCode},&nbsp;
                {order.shippingAddress.country} */}
                </p>
             
        </ListGroup.Item>
        <ListGroup.Item>
            <h2>Payment Method </h2>
            <p>
                <strong>Method : </strong>
                <strong>{order.paymentMethod} </strong>
            </p>
        </ListGroup.Item>

        <ListGroup.Item>
                <h2>Order Items</h2>
                {order.orderItems.length ===0 ? (<Errormessage>Your order is Empty</Errormessage>)
                 : (<ListGroup variant='flush'>
                    {order.orderItems.map(((item,index)=>(
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
                {/* <p><strong> Address :  </strong> 
                {order.shippingAddress.address},&nbsp;
                {order.shippingAddress.city},&nbsp;
                {order.shippingAddress.postalCode},&nbsp;
                {order.shippingAddress.country}
                </p> */}
            </ListGroup.Item>
        </Col>
    </Row>
    </>
}

export default OrderScreen