import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"

import { Link} from "react-router-dom"
import styled from "styled-components"

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: rgba(0, 0, 0, .2);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s ease;
    
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 220px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`

const Circle = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: absolute;
`

const Image = styled.img`
    height: 70%;
    z-index: 2;
`



const Icon = styled.div`
    width: 30px;
    height:  30px;
    border-radius: 50%;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: white;
    margin: 5px;
    transition: all .5s ease;
    cursor: pointer;
    
    /* &. hover{
        background-color: #e9f5f5;
        transform: scale(1.2);
    } */
`

const Product = ({item}) => {


  return (
    <Container>
      <Circle/>
      <Image src={item.img}/>
      <Info>
        <Icon>
            <ShoppingCartOutlined/>
        </Icon>
        <Icon>
           <Link to={`/product/${item._id}`} className='link'>
             <SearchOutlined/>
           </Link>
           
        </Icon>
        <Icon>
            <FavoriteBorderOutlined/>
        </Icon> 
      </Info>
    </Container>
  )
}

export default Product
