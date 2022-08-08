import React from 'react';
import google from '../../../Images/google.png';

const LoginSocial = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
            <div style={{height:'1px'}} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px'}} className='bg-dark w-50'></div>
            </div>
            <div>
                <button className='btn btn-light rounded-pill border border-dark mx-auto w-50 d-block'>
                    <img src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                    
                </button>
            </div>
        </div>
    );
};

export default LoginSocial;