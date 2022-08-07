import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  './Register.css';

const Register = () => {
    const navigate = useNavigate();

const [agree, setAgree] = useState(false);

const navigateLogin= event =>{
    navigate('/login');
}
const handleFrom = event => {
    event.preventDefault();
     const name = event.target.name.value;
     const email = event.target.email.value;
     const password = event.target.password.value;
     console.log(name,email,password);
}
    return (
        <div className='input-register'>
            <h2 style={{textAlign:'center'}}>Please Register!!!</h2>
            <form onSubmit={handleFrom}>
                <input type="text" name="name" id="" placeholder='Your name' />
            <br />
            <input type="email" name="email" id="" placeholder='Your Email Address' required />
            <br />
            <input type="password" name="password" id="" placeholder='Password' required/>
            <br />
            <input onClick={() =>{setAgree(!agree)}} type="checkbox" name="terms" id="terms" />
            <label className={`ps-2 ${agree ? '': 'text-danger'}`} htmlFor="terms">Accept books-stock condition</label>
            <br />
            <input disabled={!agree} className='w-50 mx-auto btn btn-primary mt-2' type="submit" value="Register" />

            </form>
            <p>Already Have an Account?<Link to="/login" onClick={navigateLogin} className='text-primary text-decoration-none pe-auto'>Please Login</Link></p>

        </div>
    );
};

export default Register;