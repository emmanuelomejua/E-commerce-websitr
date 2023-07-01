import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { useState } from 'react';
import styled from 'styled-components';
import { SliderItems} from '../data'
import Image1 from '../assets/2349092821760_status_b390cad871834275bbc6f36daf4b4e19.jpg'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    @media only screen and (max-width: 480px){
      display: none;
 }    
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.6;
    z-index: 2;
    &:hover{
        opacity: 0.3;
    }
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: 1.5s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw)
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=> props.bg};
`

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`

const Image = styled.img`
    height: 80%;
    width: 90%;
`

const InfoContainer = styled.div`
    padding: 50px;
    flex: 1;
`

const Title = styled.h1`
    font-size: 45px;

`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 2px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`


const Slider = () => {

    const [ slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
      if(direction === 'left'){
        setSlideIndex(slideIndex > 0 ? slideIndex - 1: 2)
      } else {
        setSlideIndex(slideIndex < 2 ?  slideIndex + 1: 0)
      }
    }

  return (
    <Container>
      <Arrow direction='left' onClick={()=>handleClick('left')}>
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        { SliderItems.map((item) => (
         <Slide bg={item.bg } key={item.id}>
              <ImgContainer>
                 <Image src={Image1}/>
               </ImgContainer>
               <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOW NOW</Button>
               </InfoContainer>
          </Slide>
        ))}
  
      </Wrapper>
      <Arrow direction='right' onClick={()=>handleClick('right')}>
        <ArrowRightOutlined/>
      </Arrow>
    </Container>
  )
}

export default Slider
