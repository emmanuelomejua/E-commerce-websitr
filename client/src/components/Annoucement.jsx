import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    width: 100vw;
    background-color: teal;
    color: white;
    display: flex;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    @media only screen and (max-width: 380px){
       width: 100vw;
  }
    
`

const Annoucement = () => {
  return (
    <Container>
      Super deal! Free ship for orders above $40
    </Container>
  )
}

export default Annoucement
