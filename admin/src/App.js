import "./App.css";
import { Home, Login, UserList, User, NewUser, ProductList, Product, NewProduct} from "./pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <Routes>

           <Route path='/login' element={<Login/>}/>
        
            <Route exact path="/" element={ <Home />}/>
            
            <Route path="/users" element={ <UserList />}/>
            
            <Route path="/user/:userId" element={ <User />}/>
      
            <Route path="/newUser" element={<NewUser />}/>
        
            <Route path="/products" element={<ProductList />}/>
          
            <Route path="/product/:productId" element={<Product />}/>
          
            <Route path="/newproduct" element={<NewProduct />}/>
          
      </Routes>
      </BrowserRouter>
       
  );
}

export default App;
