import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'


const Container = styled.div`
    width; 100vw;
    height: 100vh;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
`

const Wrapper = styled.div`
    padding: 25px;
    width: 60%;
    height: max-content;
    background-color: lightgray;
    @media only screen and (max-width: 1024px){
        border: 1px solid gray;
        width: 75%;
        height: max-content;
   } 
    @media only screen and (max-width: 480px){
        border: 1px solid gray;
        width: 85%;
        height: max-content;
   }    
`

const Title = styled.h1`
    font-size: 24px;
    font-weight; 300;
    text-align: center;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
`

const Wrap = styled.div`
   display: flex;
   flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 30%;
    margin: 20px 10px 0px 0px;
    padding: 15px;
    border: none;
    outline: none;

    &:focus{
        outline: 1px solid yellow;
    }
`

const Agreement = styled.p`
    font-size: 14px;
    margin: 10px 0px;
`

const Button = styled.button`
    border: none;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
    width: max-content;


    &:hover{
        background-color: blue;
        color: white;
        transition: all .5s ease;
    }
`

const P = styled.p`
    margin: 10px 0;
    font-size: 14px;
`
const Link1 = styled.span`
    margin: 10px 0;
    font-size: 14px;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
`

const Register = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    })
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input name='name' type='text' placeholder='Name'/>
            <Input name='lastName' type='text' placeholder='Lastname'/>
            <Input name='userName' type='text' placeholder='Username'/>
            <Input name='email' type='email' placeholder='Email'/>
            <Input name='password' type='password' placeholder='Password'/>
            <Input name='confirmPassword' type='password' placeholder='Confirm Password'/>

            <Wrap>
            <Agreement>
                By creating an account, I consent to the processing of my data in accordance with the <strong>PRIVACY POLICY</strong>
            </Agreement>
            <Button>CREATE</Button>
            <P>Already have an account? <Link to ='/login'><Link1>Login</Link1></Link></P>
            </Wrap>

        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register


