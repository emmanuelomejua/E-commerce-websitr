import styled from 'styled-components';
import Annoucement from '../components/Annoucement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import img from '../assets/2347026585038_status_3a818a8199cb457fbd560a11b57a3e88.jpg'
import { Add, Remove } from '@mui/icons-material';


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
    font-weight; 200;
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

    &: hover{
        background-color: #e9f5f5;
    }
`


const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Annoucement/>

    <Wrapper>
        <ImgContainer>
            <Image src={img}/>
        </ImgContainer>
        <InfoContainer>
            <Title>Denium Jumbsuit</Title>
            <Desc>
                Google Web Fonts
                To install the Material Icons font in your project using the Google Web Fonts CDN, add the following code snippet inside your project'stag: To use the font Icon component, you must first add the Material Icons font. Here are some instructions on how to do so. For instance, via Google Web Fonts</Desc>
            <Price> $20</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color:</FilterTitle>
                    <FilterColor color='black'/>
                    <FilterColor color='blue'/>
                    <FilterColor color='gray'/>
                </Filter>
                <Filter>
                <FilterTitle>size</FilterTitle>
                <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Add/>
                    <Amount>1</Amount>
                    <Remove/>
                </AmountContainer>

                <Button>add to cart</Button>
            </AddContainer>
        </InfoContainer>
    </Wrapper>

      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product