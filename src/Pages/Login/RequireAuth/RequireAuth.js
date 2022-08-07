import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const RequireAuth = () => {
    const [user] = useAuthState(auth);
    // ---------This is function calculation------------///
    
    return (
        <div>
            
        </div>
    );
};

export default RequireAuth;