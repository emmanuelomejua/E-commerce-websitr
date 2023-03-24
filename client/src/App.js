import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import { Routes, Route } from 'react-router-dom'



const App = () => {

  const user = false;

  return (
    <>
    <Routes>

      <Route exact path='/' element={user ?<Home/> : <Login/>} />
      <Route exact path='/products:category' element={user ?<ProductList/> : <Login/>}/>
      <Route exact path='/product/:id' element={user ? <Product/> : <Login/>}/>
      <Route exact path='/cart' element={user ? <Cart/> : <Login/>}/>
      <Route path='/login'  element={!user ? <Login/>: <Home/> }/>
      <Route path='/register' element={!user ?<Register/>: <Home/>}/>

    </Routes>
    </>
  );
}

export default App;
