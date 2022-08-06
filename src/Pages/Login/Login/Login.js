import React from 'react';
import { Form, Button } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';


const Login = () => {

const navigate = useNavigate()

const navigateRegister = event =>{
    navigate('/register');
}

    return (
        <div className='container mx-auto w-50'>
             <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Your email" required />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <p>New to Books-Stock?<Link to="/register" className='text-primary pe-auto text-decoration-none' onclick={navigateRegister}> Please Register!!!</Link></p>



        </div>
    );
};

export default Login;