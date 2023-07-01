import styled from "styled-components";
import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Logout } from "../redux/apiCalls";

const Container = styled.div`
    height: 60px;
    @media screen and (max-width: 380px){
        height: 40px;
        width: 100vw;
    }

`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 480px){
        padding: 10px 0px;
    }
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    @media only screen and (max-width: 480px){
        display: none;
   }
`

const SearchContainer = styled.div`
    border: .5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;

`
const Input = styled.input`
    border: none;
    outline: none;
    @media only screen and (max-width: 480px){
        border: 1px solid gray;
        width: 85px;
   }    
`



const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    @media only screen and (max-width: 480px){
        font-size: 24px;
        font-weight: 300;
   }
`


const Right = styled.div`
    flex: 1;
    align-items: center;
    display: flex;
    justify-content: flex-end;
    @media only screen and (max-width: 480px){
        justify-content: center;
   }
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    @media only screen and (max-width: 480px){
        margin-left: 5px;
   }
`


const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    const user = useSelector(state => state.user.currentUser)

    const dispatch = useDispatch()

    const handleLogout = () => {
       Logout(dispatch, user)
       
    }
   
  return (
    <Container>
       <Wrapper>
        <Left>
            <Language>English</Language>
            <SearchContainer>
                <Input placeholder='Search...'/>
                <Search style={{color: 'gray', fontSize: 16}}/>
            </SearchContainer>
        </Left>
        <Center>
            <Logo>
                KUSH.
            </Logo>
        </Center>
        <Right>
             <MenuItem onClick={handleLogout}>Log out</MenuItem>    
            <Link to='/cart' className="link">
                <MenuItem>
                    <Badge badgeContent={quantity} color='primary'>
                    <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Link>
     
        </Right>
       </Wrapper>
    </Container>
  )
}

export default Navbar
