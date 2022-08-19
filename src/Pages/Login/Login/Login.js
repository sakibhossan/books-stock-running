import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import LoginSocial from '../LoginSocial/LoginSocial';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import useToken from '../../../hooks/useToken';


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
const [token] = useToken(user);
let errorElement;
if(loading){
  return <Loading></Loading>
}
if (error) {
    errorElement=
     ( <div>

        <p className='text-danger'>Error: {error.message}</p>
      </div>)
    
  }




// --------this is function calculation--------------///



if(token){
  navigate(from, {replace: true});
}
const FormHandleSubmit =async(event) =>{
  event.preventDefault();
  const email = emailRef.current.value;
  const password = passwordRef.current.value;


  await signInWithEmailAndPassword(email, password)
  
  
}
const navigateRegister = event =>{
  navigate('/register');
}
const resetPassword =async () =>{
  const email = emailRef.current.value;
  
  if(email){
    await sendPasswordResetEmail(email);
  toast('Sent email');
  }
  else{
toast('please enter your email address');
  }

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
    <p>New to Books-Stock?<Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}> Please Register!!!</Link></p>
    <p>Forget Password ?<button  className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password!!!</button></p>

<LoginSocial></LoginSocial>
<ToastContainer />

        </div>
    );
};

export default Login;