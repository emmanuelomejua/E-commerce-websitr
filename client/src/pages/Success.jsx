import styled from "styled-components"


const Container = styled.div`
    height: 100vh;
    background-color: blue;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Cont = styled.div`
    height: 100%;
    display: flex;
`

const Text = styled.p`
    color: white;
    font-size: 50px;
    text-align: center;
    margin: auto;
`

const Success = () => {
  return (
    <Container>
       <Cont>
        <Text>
        Successful!
        </Text>
       </Cont>
    </Container>
  )
}

export default Success
