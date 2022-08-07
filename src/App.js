import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import CheckOut from './Pages/ProceedCheckout/ProceedCheckout/CheckOut';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/product/:productId" element={<ProductDetail></ProductDetail>}></Route>
        <Route path="/checkout" element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
