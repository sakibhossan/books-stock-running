import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../Images/google.png';

const LoginSocial = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // const gooogleLogin = () =>{

    // }
    let errorElement;
    if (error) {
        errorElement=
         ( <div>

            <p className='text-danger'>Error: {error.message}</p>
          </div>)
        
      }
      if(user){
        navigate('/home');
      }
    return (
        <div>
            <div className='d-flex align-items-center'>
            <div style={{height:'1px'}} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px'}} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div>
                <button 
                onClick={() =>signInWithGoogle()}
                className='btn btn-light rounded-pill border border-dark mx-auto w-50 d-block'>
                    <img src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                    
                </button>
            </div>
        </div>
    );
};

export default LoginSocial;