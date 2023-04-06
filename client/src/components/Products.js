import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from 'axios'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
`

const Products = ({cat, filters, sort}) => {

  const url = 'http://localhost:3400/api/products'
  const url2 = `http://localhost:3400/api/products?category=${cat}`

  const [products, setProduct] = useState([])
  const [filtered, setFiltered] = useState([])

  useEffect(()=> {
    const getProduct = async () => {
      try {
        const res = cat ? await axios.get(url2) :  await axios.get(url);
       setProduct(res.data)
      } catch (err) {
        console.error(err);
      }
    }
    getProduct()
  }, [cat, url2])


  useEffect(()=>{
   cat &&  
        setFiltered(
          products.filter((item)=>
          Object.entries(filters).every(([key, value]) => 
             item[key].includes(value)
        ))
      )
  }, [cat, products, filters])



  useEffect(()=>{
    if(sort==='newest'){
      setFiltered(prev=>
        [...prev].sort((a,b)=>a.createdAt - b.createdAt)
        )
    } else if(sort === 'asc'){
      setFiltered(prev=>
        [...prev].sort((a,b)=>a.price - b.price)
        )
    } else{
      setFiltered(prev=>
        [...prev].sort((a,b)=>b.price - a.price)
        )
    }
  },[sort])
  return (
    <Container>
        {
            cat ? filtered.map((item)=>(
                <Product key={item.id} item={item}/>
            )):  products.slice(0,9).map((item)=>(
              <Product key={item.id} item={item}/>
          ))
        }
    </Container>
  )
}

export default Products
