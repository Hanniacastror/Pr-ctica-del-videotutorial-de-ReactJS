import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Product from "../Product/Product";

const Home = () => {
    return (
    <>   
     <Navbar/> 
     <Banner/> 
     <div className="produc-card-container">
     <Product/> 
     </div>
    </>
)
}

export default Home;
