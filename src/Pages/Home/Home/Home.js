import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Footer from '../../Shared/Footer/Footer';
import Baner from '../Baner/Baner';
import Product from '../Product/Product';

const Home = () => {
  
    return (
        <div>

            <Baner></Baner>
            <Product></Product>
            
        </div>
    );
};

export default Home;