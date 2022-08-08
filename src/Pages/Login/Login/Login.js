import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import auth from '../../../firebase.init';
import LoginSocial from '../LoginSocial/LoginSocial';


const Login = () => {


  const location = useLocation();
const navigate = useNavigate();
const emailRef = useRef('');
const passwordRef = useRef('');
let from = location.state?.from?.pathname || "/";
const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
] = useSignInWithEmailAndPassword(auth);
const [sendPasswordResetEmail] = useSendPasswordResetEmail(
  auth
);
let errorElement;
if (error) {
    errorElement=
     ( <div>

        <p className='text-danger'>Error: {error.message}</p>
      </div>)
    
  }




// --------this is function calculation--------------///

const navigateRegister = event =>{
    navigate('/register');
}
const resetPassword =async() =>{
  const email = emailRef.current.value;
  await sendPasswordResetEmail(email);
  alert('Sent email');

}
if(user){
  navigate(from, {replace: true});
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
      
      <Button variant="dark" type="submit">
        Login
      </Button>
    </Form>
    {errorElement}
    <p>New to Books-Stock?<Link to="/register" className='text-primary pe-auto text-decoration-none' onclick={navigateRegister}> Please Register!!!</Link></p>
    <p>Forget Password ?<Link to="/register" className='text-primary pe-auto text-decoration-none' onclick={resetPassword}> Forget Password!!!</Link></p>

<LoginSocial></LoginSocial>

        </div>
    );
};

export default Login;