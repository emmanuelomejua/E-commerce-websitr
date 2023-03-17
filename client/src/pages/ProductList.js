import styled from 'styled-components';
import Annoucement from '../components/Annoucement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';

const Container = styled.div`
    margin: 20px;
`

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
    @media only screen and (max-width: 480px){
        width: 5px 10px;
        display: flex;
        flex-direction: column;
    }
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 500;
    margin-right: 20px;
    @media only screen and (max-width: 480px){
        margin-right: 0px;
    }
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    @media only screen and (max-width: 480px){
        margin: 10px 0px;
    }
`

const Option = styled.option`
    
`



const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Annoucement/>

      <Title>Dresses</Title>
      <FilterContainer>
         <Filter>
            <FilterText>Filter Product:</FilterText>
            <Select>
                <Option disabled selected> Color</Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
            </Select>

            <Select>
                <Option disabled selected> Size</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
            </Select>
            
         </Filter>
         <Filter>
            <FilterText> Sort Product:</FilterText>
            <Select>
                <Option default selected> Newest</Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
            </Select>
         </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
