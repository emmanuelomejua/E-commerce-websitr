import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Annoucement from '../components/Annoucement';
import img from '../assets/2349066014788_status_86171df7bc9a462ab7402cc82219f76e.jpg'
import { Add, Remove } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
    @media only screen and (max-width: 480px){
        padding: 10px;
   }   
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type==='filled' && 'none'};
    color: ${props=>props.type==='filled' && 'white'};
    background-color: ${props=>props.type==='filled' ? 'black' : 'transparent'};
`

const TopTexts = styled.div`
    @media only screen and (max-width: 480px){
    display: none;
}
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
   
    @media only screen and (max-width: 480px){
        flex-direction: column;
    }
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 480px){
        flex-direction: column;
    }
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px
    
    
`
const ProductName = styled.span``
const ProductID = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color}
`   
const ProductSize = styled.span``
const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`

const ProductAmount = styled.div`
    font-size: 18px;
    margin: 5px;
    @media only screen and (max-width: 480px){
        margin: 5px 15px;
    }
`

const ProductPrice = styled.div`
    font-size: 22px;
    font-weight: 200;
    @media only screen and (max-width: 480px){
        margin-bottom: 15px;
    }
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: .5px solid lightgray;
    border-radius: 10px;
    padding: 10px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;

`
const SummaryItem = styled.div`
    margin: 30px 0px;
    align-items: center;
    justify-content: space-between;
    font-weight: ${props=>props.type === 'total' && 'bold'};
    font-size: ${props=>props.type === 'total' && '20px'};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    opacity: .5;
    color: white;
    cursor: pointer;
`

const Cart = () => {
    const cart = useSelector(state=>state.cart)
  return (
    <Container>
        <Navbar/>
        <Annoucement/>
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping (2)</TopText>
                    <TopText>Your Watchlist (0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top> 
            <Bottom>
                <Info>
           { cart.products?.map(product => (
            <Product>
            <ProductDetail>
                <Image src={product?.img}/>
                <Details>
                    <ProductName><b>Product: </b>{product?.title}</ProductName>
                    <ProductID><b>ID: </b>{product?._id}</ProductID>
                    <ProductColor color={product?.color}/>
                    <ProductSize><b>Size:</b>{product?.size}</ProductSize>
                </Details>
            </ProductDetail>
            <PriceDetail>
                <ProductAmountContainer>
                   <Remove/>
                    <ProductAmount>{product?.quantity}</ProductAmount>
                    <Add/>
                </ProductAmountContainer>
                <ProductPrice>$ {product?.price * product?.quantity}</ProductPrice>
            </PriceDetail>
        </Product>
        
           )) 
            }
                  
                  <Hr/>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                         <SummaryItemText>Subtotal: </SummaryItemText>
                         <SummaryItemPrice>$40</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                         <SummaryItemText>Estimated shipping: </SummaryItemText>
                         <SummaryItemPrice>$ 3.50</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                         <SummaryItemText>Shipping Discount: </SummaryItemText>
                         <SummaryItemPrice>$ -1.53</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem type='total'>
                         <SummaryItemText >Total: </SummaryItemText>
                         <SummaryItemPrice>$41.97</SummaryItemPrice>
                    </SummaryItem>

                    <Button>CHECKOUT NOW</Button>
                </Summary>

                
            </Bottom>
        </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
