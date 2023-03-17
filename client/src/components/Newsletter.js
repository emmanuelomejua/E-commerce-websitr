import { Send } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
    height: 60vh;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 40px;
    margin: 20px;
`

const Description = styled.div`
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 20px;
    @media only screen and (max-width: 480px){
        text-align: center;
   }
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: .5px solid lightgray;
    @media only screen and (max-width: 480px){
        width: 80%;
   }
`


const Input = styled.input`
    border: none;
    flex: 5;
    outline: none;
`


const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`

const Newsletter = () => {
  return (
    <Container>
       <Title>Newsletter</Title>
       <Description>Get timely updates from your favorite products</Description>
       <InputContainer>
            <Input placeholder='Your Email'/>
            <Button>
                <Send/>
            </Button>
       </InputContainer>
    </Container>
  )
}

export default Newsletter
