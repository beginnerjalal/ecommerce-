import React,{useState} from 'react'
import {Form, Button, Col} from 'react-bootstrap'
import { savePaymentMethod } from '../../actions/cartAction'
import CheckoutStep from './checkoutStep'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const PaymentScreen = () => {
    const history = useNavigate();
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    if(!shippingAddress) {
        history('/shipping');
    }
    const dispatch = useDispatch()
    const [paymentMethod, setPaymentMethod] = useState('payPal');
    const submitHandler =()=>{
        dispatch(savePaymentMethod(paymentMethod))
        history('/placeorder')
    }

  return (
    <>
    <CheckoutStep step1 step2 step3/>
    <h1>Payment Method </h1>
    <Form onSubmit={submitHandler}>
        <Form.Group>
                <Form.Label as="legend">
                    Select Payment Method
                </Form.Label>
                <Col>
                <Form.Check type='radio' label="Paypal or Credit Card"
                id="paypal" name="paymentMethod" value="payPal" checked 
                onChange={e=>setPaymentMethod(e.target.value)}>
                </Form.Check>

                {/* <Form.Check type='radio' label="Strip"
                id="paypal" name="paymentMethod" value="strip" checked 
                onChange={e=>setPaymentMethod(e.target.value)}>
                </Form.Check> */}
                </Col>
        </Form.Group>
        <Button type='submit' variant='primary'>Continue</Button>
    </Form>

    </>
  )
}

export default PaymentScreen