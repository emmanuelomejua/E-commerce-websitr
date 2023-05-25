import { Annoucement, Categories, Footer, Navbar, Newsletter, Products, Slider } from "../components"


const Home = () => {
  return (
    <div>
      
      <Annoucement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
