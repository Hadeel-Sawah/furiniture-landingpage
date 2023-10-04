
import Features from "./component/Features/Features";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Newsletter from "./component/Newsletter/Newsletter";
import Products from "./component/Products/Products";
import Testimonial from "./component/Testimonial/Testimonial";

function App() {
  return (
    <> 
        <Navbar/>
        <div className='container'>
          <Hero/>
          <Features/>
          <Products/>
          <Testimonial/>
        </div>  
        
        <Newsletter/> 
        <Footer/>
    </>
  );
}

export default App;
