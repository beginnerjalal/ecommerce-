import React, { useState , useEffect} from 'react'
import  { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import Message from '../errormessage';
import loader from '../loader';
import {login} from '../../actions/userAction'
import FormContainer from './formContainer'
import Loader from '../loader';

const LoginScreen = ({location}) => {
  let history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const redirect = location ? location.search.split('=')[1] : "/" ;
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin)
    const {loading, error, userInfo} = userLogin;
 
    useEffect(() => {
      if(userInfo){
        // history.push(redirect);
        history(redirect)
      }
    }, [history,userInfo, redirect])

    const onSubmit = (e) =>{
      e.preventDefault();
      dispatch(login(email,password))
  }
    
  return (
    <>
    <FormContainer>
        <h1>Sign in</h1>
        {error && <Message variant="danger">{error} </Message>}
        {loading && <Loader/>}
        {Loader}
        <Form onSubmit={onSubmit}>
            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='enter email' value={email} onChange={(e)=> setEmail(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label>Password </Form.Label>
                <Form.Control type='Password' placeholder='enter Password' value={password} onChange={(e)=> setPassword(e.target.value)}></Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>Sign in </Button>
        </Form>
        <Row>
            <Col>
            New User ?
            <Link to={redirect ? `register?redirect=${redirect}` : '/register'}>Register</Link>
            </Col>
        </Row>
    </FormContainer>
    </>
  )
}

export default LoginScreen