import styled from 'styled-components';

const Container = styled.div`
    width; 100vw;
    height: 100vh;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    height:  60%;
    background-color: lightblue;
    @media only screen and (max-width: 480px){
        border: 1px solid gray;
        width: 75%;
        height:  65%;
   }    
`

const Title = styled.h1`
    font-size: 24px;
    font-weight; 300;
    text-align: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;

`
const Input = styled.input`
    flex: 1;
    min-width: 30%;
    margin: 10px 0px ;
    padding: 10px;
    border: 1.5px solid lightblue;
    @media only screen and (max-width: 480px){
        outline: 1px solid yellow;
    }
`

const Agreement = styled.p`
    font-size: 14px;
    margin: 10px 0px;
`

const Button = styled.button`
    width: 20%;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;


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

const Link = styled.a`
    margin: 10px 0;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
`


const Login = () => {
  return (
    <Container>
       <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder='Username'/>
    
            <Input placeholder='Password'/>
            <Agreement>
                By creating an account, I consent to the processing of my data in accordance with the <strong>PRIVACY POLICY</strong>
            </Agreement>
            <Button>Login</Button>
            <P>Do not have an account? <Link>Create an account</Link></P>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
