import { Cart, Login, Register, Home, Product, ProductList} from './pages';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import Success from './pages/Success';
import { useSelector } from 'react-redux';



const App = () => {

  const user = useSelector(state=> state.user.currentUser)
  

  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route exact path='/' element={user ? <Home/> : <Navigate to='/login'/>}/>
        <Route exact path='/products/:category' element={user ?<ProductList/> : <Navigate to='/login'/>}/>
        <Route exact path='/product/:id' element={user ? <Product/> : <Navigate to='/login'/>}/>
        <Route exact path='/cart' element={user ? <Cart/> : <Navigate to='/login'/>}/>
        <Route path='/login'  element={!user ? <Login/>: <Navigate to='/'/> }/>
        <Route path='/register' element={!user ?<Register/>: <Navigate to='/'/>}/>
        <Route exact path='/success' element={user ?<Success/> : <Navigate to='/login'/>} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
