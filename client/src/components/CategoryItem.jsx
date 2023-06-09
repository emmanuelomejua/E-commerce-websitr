
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`

const Image = styled.img`
    height: 100%;
    object-fit: cover; 
`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 35%;
    @media only screen and (max-width: 480px){
        margin-top: 13%;
   }  
`

const Title = styled.h1`
    color: white;
    margin: 10px;
    font-size: 25px; 
`

const Button = styled.button`
    padding: 10px;
    border: none;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.cat}`}>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop now</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem
