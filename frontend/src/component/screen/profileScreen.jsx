import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../errormessage";
import loader from "../loader";
import { getUserDetails, updateUserProfile } from "../../actions/userAction";
import Loader from "../loader";

const ProfileScreen = ({location}) => {
    let history = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
  
    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.userDetails);
    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, user } = userDetails;
    const { userInfo } = userLogin ;
  
    const userUpdateProfile = useSelector(state=>state.userUpdateProfile)
    const {success} = userUpdateProfile

    useEffect(() => {
      // if(userInfo){
      //   // history.push(redirect);
      //   history(redirect)
      // }
      if (!userInfo) {
        history("/login");
      } else {
        if (!user.name) {
          dispatch(getUserDetails("profile"));
        } else {
          setName(user.name);
          setEmail(user.email);
        }
      }
    }, [history, userInfo, user, dispatch]);
  
    const onSubmit = (e) => {
      e.preventDefault();
      dispatch(updateUserProfile({id:user._id, name, email, password}))
    };
    
  return (
    <>
      <Row>
        <Col md={3}>
          <h1>Update User information </h1>
          {error && <Message variant="danger">{error} </Message>}
          {success && <Message variant="success">Profile updated </Message>}
          {loading && <Loader />}
          {message && <Message variant="danger">{message}</Message>}

          <Form onSubmit={onSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <br />

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <br />
            <Form.Group controlId="password">
              <Form.Label>Password </Form.Label>
              <Form.Control
                type="Password"
                placeholder="enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <br />
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password </Form.Label>
              <Form.Control
                type="Password"
                placeholder="Re-enter Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
              <br />
            <Button type="submit" variant="primary">
              Update{" "}
            </Button>
          </Form>
        </Col>
{/* <br />
        <Col md={9}>
          <h1>My Orders</h1>
        </Col> */}
      </Row>
    </>
  )
}

export default ProfileScreen