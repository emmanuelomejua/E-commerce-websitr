import { Facebook, Instagram, MailOutlined, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    @media only screen and (max-width: 480px){
        flex-direction: column;
     }   
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
@media only screen and (max-width: 480px){
   font-size: 20px;
}    
`

const Desc = styled.p`
    margin: 20px 0px;`

const SocialContainer =  styled.div`
    display: flex;
`

const SocailIcon =  styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`


const Right = styled.div`
    flex: 1;
    padding: 20px;
    @media only screen and (max-width: 480px){
        background-color: #eee;
     } 
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 100%;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    @media only screen and (max-width: 480px){
        display: none;
   }    
`

const Title = styled.h3`
    margin-bottom: 25px;
    @media only screen and (max-width: 480px){
        font-size: 20px;
     }   
`

const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`


const ListItem = styled.li`
    width: 50%;
    margin-bottom: 5px;
`


const Footer = () => {
  return (
    <Container>
       <Left>
            <Logo>KUSH</Logo>

            <Desc>To use the font Icon component or the prebuilt SVG Material Icons (such as those found in the icon demos), you must first install the Material Icons font. You can do so with npm or yarn, or with the Google Web Fonts CDN.
            </Desc>
            <SocialContainer>
                <SocailIcon color='3B5999'>
                   <Facebook/> 
                </SocailIcon>

                <SocailIcon color='E4405F'>
                   <Instagram/> 
                </SocailIcon>

                <SocailIcon color='55ACEE'>
                   <Twitter/> 
                </SocailIcon>

                <SocailIcon color='E60023'>
                   <Pinterest/> 
                </SocailIcon>
            </SocialContainer>
       </Left>
       <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Male Fashion</ListItem>
                <ListItem>women wears</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Watchlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>

       </Center>

       <Right>
        <Title>Contact</Title>
        <ContactItem>
           <Room style={{marginRight: '10px'}}/>80 AKA/ITIAM STR, UYO. AKS
        </ContactItem>

        <ContactItem>
            <Phone style={{marginRight: '10px'}}/>+234 8162 396 581
         </ContactItem>

         <ContactItem>
            <MailOutlined style={{marginRight: '10px'}}/> ifyomejua@gmail.com
        </ContactItem>

        <Payment src=''/>
       </Right>
    </Container>
  )
}

export default Footer
