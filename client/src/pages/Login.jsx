import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: url('https://img.ssensemedia.com/images/f_auto,q_auto:best/222451F048073_1/gucci-beige-large-attache-shoulder-bag.jpg');
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    padding: 20px;
    background-color: #d3d3d3;
    @media only screen and (max-width: 550px){
        border: 1px solid gray;
        padding: 5px;
   }    
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;

`
const Input = styled.input`
    flex: 1;
    width: 300px;
    margin: 10px;
    padding: 10px;
    border: none;
    outline: .5px solid yellow;
  
    @media only screen and (max-width: 480px){
        outline: .5px solid yellow;
        width: 240px;
        padding: 15px;
    }
`

const Agreement = styled.p`
    font-size: 14px;
    margin: 15px 0px;
    width: 300px;
    padding: 10px;

    @media only screen and (max-width: 480px){
       padding: 5px;
       width: 230px;
    }
`

const Button = styled.button`
    border: none;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    background-color: blue;
    color: white;


    &:disabled{
        color: green;
        cursor: not-allowed;
    }
    @media only screen and (max-width: 480px){
       padding: 10px  0px;
    }
`

const P = styled.p`
    margin: 10px 0;
    font-size: 14px;
`

const Link1 = styled.span`
    margin: 10px 0;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
`

const Error = styled.span`
    color: crimson;
    font-size: 12px;
    margin-top: 2.5px;
`


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {loading, error} = useSelector(state => state.user)

    const toastOptions = {
        position: 'top-right',
        draggable: true,
        pauseOnHover: true,
        autoClose: 8000,
        theme: 'light'
    }


    const handleValidation = () => {
       if(email.length === '' || email.length < 4){
        toast.error('Please enter a valid email and password to continue', toastOptions)
        return false;
       } else if(password.length === '' || password.length < 4){
        toast.error('Please enter a valid email and password to continue', toastOptions)
        return false;
       } else {
        return false
       }
      
    }


    const handleClick = (e) => {
        e.preventDefault()
        if( handleValidation()){
            login(dispatch, {email, password})
        }
    }

  return (
    <>
    <Container>
       <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input 
                type='email' 
                placeholder='Email'
                onChange={(e)=>setEmail(e.target.value)}
                required
            />
    
            <Input 
                type='password' 
                placeholder='Password'
                onChange={(e)=>setPassword(e.target.value)}
                required
            />
           

            <Agreement>
                By creating an account, I consent to the processing of my data in accordance with the <strong>PRIVACY POLICY</strong>
            </Agreement>
            <Button onClick={handleClick} disabled={loading}>Login</Button>

            <P>Do not have an account? <Link to='/register'><Link1>Create an account</Link1></Link></P>
        </Form>
      </Wrapper>
      <ToastContainer/>
    </Container>
    </>
  )
}

export default Login
