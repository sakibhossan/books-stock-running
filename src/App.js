import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddItem from './Pages/AddItem/AddItem';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import MyItem from './Pages/MyItem/MyItem';
import CheckOut from './Pages/ProceedCheckout/ProceedCheckout/CheckOut';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import {ToastContainer} from 'react-toastify';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/product/:productId" element={<ProductDetail></ProductDetail>}></Route>
        <Route path="/checkout/:productId" element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}></Route>
        <Route path="/additem" element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>}></Route>
        <Route path="/manageproduct" element={<RequireAuth>
          <ManageProducts></ManageProducts>
        </RequireAuth>}></Route>
        <Route path="/myitem" element={<RequireAuth>
       <MyItem></MyItem>
        </RequireAuth>}></Route>
       
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
      
    </div>
  );
}

export default App;
