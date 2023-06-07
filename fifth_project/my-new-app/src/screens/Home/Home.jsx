import MainContent from "../../components/MainContent/MainContent"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import TShirtBlock from "../../components/TShirtBlock/TShirtBlock"
import Banner from "../../components/Banner/Banner"
import Tshirt from "../../images/shirt.jpg"
import products from '../../accets/shirt.json'

const Home = () => {
  return (
    <>
         <Header/>
         <Banner/>
      <MainContent/>
        <Footer/>
        <div style={{display:"flex", flexWrap:"wrap"}}>
        {/* <TShirtBlock 
        title = "FOCUS" 
        price='125' 
        sizes= {[40,42,44]} 
        imgUrl = {Tshirt}/>
       */}
       {
        products.map(product =>
           (<TShirtBlock
              key={product.id}
              {...product}
           />))
       }
        </div>
        
    </>
  )
}

export default Home