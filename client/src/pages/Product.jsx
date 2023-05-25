import styled from 'styled-components';
import {Annoucement, Footer, Navbar, Newsletter } from '../components';
import { Add, Remove } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartReducer';


const Container = styled.div``

const Wrapper  = styled.div`
    padding: 50px;
    display: flex;
    @media only screen and (max-width: 480px){
        padding: 10px;
        flex-direction: column;
   }  
`


const InfoContainer  = styled.div`
    flex: 1;
    padding: 0px 30px;
    @media only screen and (max-width: 480px){
        padding: 10px;
        
   }  
`


const ImgContainer  = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
`


const Desc  = styled.p`
    margin: 10px 0;
`

const Title = styled.h1`
    font-weight: 200;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 35px;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
    margin-right: 25px;
`

const FilterContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    @media only screen and (max-width: 480px){
        width: 100%;
   }  
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color}; 
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 480px){
        width: 100%;
   } 
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 5px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 600;
    text-transform: Capitalize;

    /* &: hover{
        background-color: #e9f5f5;
    } */
`


const Product = () => {

    const location = useLocation()
    const id = location.pathname.split('/')[2]

    const url = `http://localhost:3400/api/products/find/${id}`
    
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const dispatch = useDispatch()

    const handleQuantity = (type) => {
        if(type==='dec'){
            quantity > 1 && setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    }

    const handleClick = () => {
        dispatch(addProduct({...product, quantity, color, size}))
    }

    useEffect(()=>{
        const getProduct = async () => {
            try {
                const res = await axios.get(url)
                setProduct(res.data)
            } catch (error) {
                throw(error)
            }
        }
        getProduct()
    }, [id, url])

  return (
    <Container>
      <Navbar/>
      <Annoucement/>

    <Wrapper>
        <ImgContainer>
            <Image src={product.img}/>
        </ImgContainer>
        <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price> ${product.price}</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color:</FilterTitle>
                    {product.color?.map((c)=>(
                         <FilterColor defaultValue={c[0]} color={c} key={c} onClick={()=>setColor(c)}/>
                    ))}
                </Filter>
                <Filter>
                <FilterTitle>size</FilterTitle>
                <FilterSize onChange={(e)=>setSize(e.target.value)}>
                    {
                        product.size?.map((s)=> (
                        <FilterSizeOption key={s} defaultValue={s[0]}>{s}</FilterSizeOption>
                        ))
                    }
                  
                </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                   <Remove onClick={()=>handleQuantity('dec')}/>
                    <Amount>{quantity}</Amount>
                    <Add onClick={()=>handleQuantity('inc')}/> 
                </AmountContainer>

                <Button onClick={handleClick}>add to cart</Button>
            </AddContainer>
        </InfoContainer>
    </Wrapper>

      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product