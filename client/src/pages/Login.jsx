import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: url('../assets/1676915893233.jpg');
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 30%;
    height:  max-content;
    background-color: lightgray;
    @media only screen and (max-width: 480px){
        border: 1px solid gray;
        width: max-content;
        height:  65%;
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

`
const Input = styled.input`
    flex: 1;
    min-width: 25%;
    margin: 10px 0px ;
    padding: 10px;
    border: none;
    &:focus{
        outline: 1.5px solid yellow;
    }
  
    @media only screen and (max-width: 480px){
        outline: .5px solid yellow;
    }
`

const Agreement = styled.p`
    font-size: 14px;
    margin: 15px 0px;
`

const Button = styled.button`
    width: max-content;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;


    &:hover{
        background-color: blue;
        color: white;
        transition: all .5s ease;
    }
    &:disabled{
        color: green;
        cursor: not-allowed;
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
    color: red;
    font-size: 12px;
    margin-top: 5px;
`


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {loading, error} = useSelector(state => state.user)



    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, {email, password})
    }

  return (
    <Container>
       <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input 
                type='email' 
                placeholder='Email'
                onChange={(e)=>setEmail(e.target.value)}
            />
    
            <Input 
                type='password' 
                placeholder='Password'
                onChange={(e)=>setPassword(e.target.value)}
            />
           

            <Agreement>
                By creating an account, I consent to the processing of my data in accordance with the <strong>PRIVACY POLICY</strong>
            </Agreement>
            <Button onClick={handleClick} disabled={loading}>Login</Button>
            {error && <Error>Pls enter a valid email and password to login</Error>}

            <P>Do not have an account? <Link to='/register'><Link1>Create an account</Link1></Link></P>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
