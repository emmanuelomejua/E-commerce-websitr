import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import { Routes, Route, Navigate } from 'react-router-dom'
import Success from './pages/Success';



const App = () => {

  const user = true;

  return (
    <>
    <Routes>

      <Route exact path='/' element={<Home/> }/>
      <Route exact path='/products/:category' element={user ?<ProductList/> : <Navigate to='login'/>}/>
      <Route exact path='/product/:id' element={user ? <Product/> : <Navigate to='/login'/>}/>
      <Route exact path='/cart' element={user ? <Cart/> : <Navigate to='/login'/>}/>
      <Route path='/login'  element={!user ? <Login/>: <Navigate to='/'/> }/>
      <Route path='/register' element={!user ?<Register/>: <Navigate to='/'/>}/>
      <Route exact path='/success' element={user ?<Success/> : <Navigate to='/login'/>} />

    </Routes>
    </>
  );
}

export default App;
