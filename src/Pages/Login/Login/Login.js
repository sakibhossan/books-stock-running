import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {Link, useNavigate} from 'react-router-dom';
import auth from '../../../firebase.init';


const Login = () => {

const navigate = useNavigate();
const emailRef = useRef('');
const passwordRef = useRef('');
const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
] = useSignInWithEmailAndPassword(auth);




// --------this is function calculation--------------///

const navigateRegister = event =>{
    navigate('/register');
}
if(user){
  navigate('/home');
}
const FormHandleSubmit = event =>{
  event.preventDefault();
  const email = emailRef.current.value;
  const password = passwordRef.current.value;


  signInWithEmailAndPassword(email, password)
}

    return (
        <div className='container mx-auto w-50'>
          <h2 className='text-primary text-center mt-3'>Login</h2>
             <Form onSubmit={FormHandleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={emailRef} type="email" placeholder="Enter Your email" required />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
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