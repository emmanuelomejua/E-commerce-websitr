import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import { Routes, Route, Navigate } from 'react-router-dom'



const App = () => {

  const user = true;

  return (
    <>
    <Routes>

      <Route exact path='/' element={user ?<Home/> : <Navigate to='/login'/>} />
      <Route exact path='/products/:category' element={user ?<ProductList/> : <Navigate to='login'/>}/>
      <Route exact path='/product/:id' element={user ? <Product/> : <Navigate to='/login'/>}/>
      <Route exact path='/cart' element={user ? <Cart/> : <Navigate to='/login'/>}/>
      <Route path='/login'  element={!user ? <Login/>: <Navigate to='/'/> }/>
      <Route path='/register' element={!user ?<Register/>: <Navigate to='/'/>}/>

    </Routes>
    </>
  );
}

export default App;
