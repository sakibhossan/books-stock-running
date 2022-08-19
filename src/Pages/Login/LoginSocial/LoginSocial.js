import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import google from '../../../Images/google.png';
import Loading from '../../Shared/Loading/Loading';

const LoginSocial = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   const [token] = useToken(user);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
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
      if(token){
        navigate(from, {replace: true});
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