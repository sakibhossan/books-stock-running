import React from 'react';
import  './Register.css';

const Register = () => {
    return (
        <div className='input-register'>
            <h2 style={{textAlign:'center'}}>Please Register!!!</h2>
            <form>
                <input type="text" name="name" id="" placeholder='Your name' />
            <br />
            <input type="email" name="email" id="" placeholder='Your Email Address' required />
            <br />
            <input type="password" name="password" id="" placeholder='Password' required/>
            <br />
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">Accept books-stock condition</label>
            <br />
            <input className='w-50 mx-auto btn btn-primary mt-2' type="submit" value="Register" />

            </form>
        </div>
    );
};

export default Register;