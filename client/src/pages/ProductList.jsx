import { useState } from 'react';
import { useLocation } from 'react-router-dom';
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

    
    const location = useLocation()
    const cat = location.pathname.split('/')[2]

    const [filters, setFiters] = useState({})
    const [sort, setSort] = useState('newest')

    const handleFilters = (e) => {
        const value = e.target.value
        setFiters({
            ...filters,
            [e.target.name]: value.toLowerCase()
        })
    }
    
  return (
    <Container>
      <Navbar/>
      <Annoucement/>

      <Title>{cat}</Title>
      <FilterContainer>
         <Filter>
            <FilterText>Filter Product:</FilterText>
            <Select name='color' onChange={handleFilters}>
                <Option disabled defaultValue> Color</Option>
                <Option>white</Option>
                <Option>black</Option>
                <Option>red</Option>
                <Option>blue</Option>
                <Option>yellow</Option>
                <Option>green</Option>
            </Select>

            <Select name='size' onChange={handleFilters}>
                <Option disabled defaultValue> Size</Option>
                <Option>XL</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
            </Select>
            
         </Filter>
         <Filter>
            <FilterText> Sort Product:</FilterText>
            <Select onChange={(e)=>setSort(e.target.value)}>
                <Option value='newest'> Newest</Option>
                <Option value='asc'>Price (asc)</Option>
                <Option value='desc'>Price (desc)</Option>
            </Select>
         </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
