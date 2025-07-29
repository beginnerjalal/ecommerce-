import React, { useState , useEffect} from 'react'
import  { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import Message from '../errormessage';
import loader from '../loader';
import {register} from '../../actions/userAction'
import FormContainer from './formContainer'
import Loader from '../loader';

const UserRegistrationScreen = ({location}) => {
  let history = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");


    const redirect = location ? location.search.split('=')[1] : "/" ;
    const dispatch = useDispatch();
    const userRegister = useSelector(state => state.userRegister)
    const {loading, error, userInfo} = userRegister;
 
    useEffect(() => {
      if(userInfo){
        // history.push(redirect);
        history(redirect)
      }
    }, [history,userInfo, redirect])

    const onSubmit = (e) =>{
      e.preventDefault();
      if (password !== confirmPassword) {
        setMessage("Password do not match");
      }else{
          dispatch(register(name, email,password))
      }
  }
    
  return (
    <>
    <FormContainer>
        <h1>Register User</h1>
        {error && <Message variant="danger">{error} </Message>}
        {loading && <Loader/>}
        {message && <Message variant="danger">{message}</Message>}
        <Form onSubmit={onSubmit}>
            <Form.Group controlId='email'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='enter name' value={name} onChange={(e)=> setName(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='enter email' value={email} onChange={(e)=> setEmail(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label>Password </Form.Label>
                <Form.Control type='Password' placeholder='enter Password' value={password} onChange={(e)=> setPassword(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='confirmPassword'>
                <Form.Label>Confirm Password </Form.Label>
                <Form.Control type='Password' placeholder='Re-enter Password' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>Sign in </Button>
        </Form>
        <Row>
            <Col>
            Already have an Account ?
            <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login </Link>
            </Col>
        </Row>
    </FormContainer>
    </>
  )
}

export default UserRegistrationScreen