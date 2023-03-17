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
    width: 60%;
    background-color: lightblue;
    @media only screen and (max-width: 480px){
        border: 1px solid gray;
        width: 75%;
        height:  75%;
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
`

const Input = styled.input`
    flex: 1;
    min-width: 30%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    border: 1.5px solid lightblue;
`

const Agreement = styled.p`
    font-size: 14px;
    margin: 10px 0px;
`

const Button = styled.button`
    width: 25%;
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

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder='Name'/>
            <Input placeholder='Lastname'/>
            <Input placeholder='Username'/>
            <Input placeholder='Email'/>
            <Input placeholder='password'/>
            <Input placeholder='Confirm Password'/>

            <Agreement>
                By creating an account, I consent to the processing of my data in accordance with the <strong>PRIVACY POLICY</strong>
            </Agreement>
            <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register












