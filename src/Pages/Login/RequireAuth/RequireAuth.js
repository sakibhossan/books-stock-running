import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const location = useLocation();
   
    
   
    // ---------This is function calculation------------///
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
       return  <Navigate to="/login" state={{ from: location }} replace />; 
    }
    console.log(user);
   if(user.providerData[0]?.providerId === 'password' &&!user.emailVerified){
    return <div className='text-center'>
        <h3 className='text-danger' > Your email is not verified</h3>
        <button
        className='btn btn-primary'
          onClick={async () => {
            await sendEmailVerification();
            toast('Sent email');
          }}
        >send verifed sms</button>
        <ToastContainer></ToastContainer>
    </div>
   }
       
       
       
    
    
    return children;
};

export default RequireAuth;